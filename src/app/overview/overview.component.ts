import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  evts: any[] = [];
  loading = true;
  constructor(
    private http: HttpService,
    private activateRoute: ActivatedRoute
  ) {
    this.fetchEvents();
  }

  ngOnInit(): void {}

  async fetchEvents() {
    try {
      this.evts = (await this.http.get({
        url: `${environment.serviceUrl}/users/${this.activateRoute.parent.snapshot.params.id}/events/public`,
      })) as any[];
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }
}
