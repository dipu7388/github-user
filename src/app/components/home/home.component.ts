import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = true;
  errorObj;
  userContribution;
  user;
  tabs = [
    { label: 'Overview', path: 'overview' },
    { label: 'Repositories', path: 'repo' },
    { label: 'Projects', path: 'project' },
    { label: 'Packages', path: 'package' },
  ];
  constructor(
    private http: HttpService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.fetchUserData();
  }
  ngOnInit() {}
  async fetchUserData() {
    try {
      let [userInfo] = await Promise.all([this.fetchData()]);
      this.user = userInfo;
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }
  fetchData() {
    let params = new HttpParams();
    return this.http.get({
      url: `${
        environment.serviceUrl
      }/users/${this.activateRoute.snapshot.paramMap.get('id')}`,
      params,
    });
  }

  fetchContribution() {
    let params = new HttpParams();
    return this.http.get({
      url: `https://github.com/users/${this.activateRoute.snapshot.paramMap.get(
        'id'
      )}/contributions`,
      params,
    });
  }

  debounceScroll(fn, d) {
    let timer;
    return function (...args) {
      let context = this;
      // let args= arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  }
}
