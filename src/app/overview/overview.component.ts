import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from '../services/http.service';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import _ from 'lodash';
export const MONTH = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Septuber',
  'October',
  'November',
  'December',
];
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  evts: any[] = [];
  loading = true;
  repos: any[] = [];
  activies: any[];

  constructor(
    private http: HttpService,
    private activateRoute: ActivatedRoute
  ) {
    this.fetchUserData();
    this.fetchContri();
  }

  async fetchUserData() {
    try {
      let evts;
      [evts, this.repos] = (await Promise.all([
        this.fetchEvents(),
        this.fetchRepoList(),
      ])) as any;
      this.evts = evts.reduce((p, c) => [...p, ...c], []);
      let yearWiseData = this.evts.reduce((p, c) => {
        let y = new Date(c.created_at).getFullYear();
        if (p.has(y)) {
          p.get(y).push(c);
        } else {
          p.set(y, [c]);
        }
        return p;
      }, new Map());
      let yearMonthWise = [];
      for (let [k, v] of yearWiseData) {
        let year: any = { year: k };
        let monthWise = v.reduce((p, c) => {
          let y = new Date(c.created_at).getMonth();
          if (p.has(y)) {
            p.get(y).push(c);
          } else {
            p.set(y, [c]);
          }
          return p;
        }, new Map());
        let monthWiseEvents = [];
        for (let [m, md] of monthWise) {
          let month: any = { month: m, name: MONTH[m] };
          let monthEvents = md.reduce((p, c) => {
            if (p.has(c.type)) {
              p.get(c.type).push(c);
            } else {
              p.set(c.type, [c]);
            }
            return p;
          }, new Map());
          month.data = [];
          for (let [e, ed] of monthEvents) {
            let event: any = { event: e };
            let repoEventMap = ed.reduce((p, c) => {
              if (p.has(c.repo.name)) {
                p.get(c.repo.name).push(c);
              } else {
                p.set(c.repo.name, [c]);
              }
              return p;
            }, new Map());
            event.repos = [];
            event.total = 0;
            for (let [r, rd] of repoEventMap) {
              let repo: any = { name: r };
              repo.count = rd.length;
              event.total += repo.count;

              event.repos.push(repo);
            }
            month.data.push(event);
          }

          monthWiseEvents.push(month);
        }
        year.data = monthWiseEvents.sort((a, b) => b.month - a.month);
        yearMonthWise.push(year);
      }
      this.activies = yearMonthWise;
      console.log(yearMonthWise);
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }

  ngOnInit(): void {}

  fetchEvents() {
    return Promise.all([
      this.http.get({
        url: `${environment.serviceUrl}/users/${this.activateRoute.parent.snapshot.params.id}/events`,
        params: new HttpParams().set('per_page', '100').set('page', '1'),
      }),
      this.http.get({
        url: `${environment.serviceUrl}/users/${this.activateRoute.parent.snapshot.params.id}/events`,
        params: new HttpParams().set('per_page', '100').set('page', '2'),
      }),
      this.http.get({
        url: `${environment.serviceUrl}/users/${this.activateRoute.parent.snapshot.params.id}/events`,
        params: new HttpParams().set('per_page', '100').set('page', '3'),
      }),
    ]);
  }

  fetchRepoList() {
    return this.http.get({
      url: `${environment.serviceUrl}/users/${this.activateRoute.parent.snapshot.params.id}/starred`,
      params: new HttpParams().set('per_page', '10').set('type', 'public'),
    });
  }

  async fetchContri() {}
}
