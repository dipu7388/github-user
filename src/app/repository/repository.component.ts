import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  repos: any[] = [];
  loading = true;
  constructor(
    private http: HttpService,
    private activateRoute: ActivatedRoute
  ) {
    this.fetchRepoList();
  }
  ngOnInit(): void {}
  async fetchRepoList() {
    try {
      this.repos = (await this.http.get({
        url: `${environment.serviceUrl}/users/${this.activateRoute.parent.snapshot.params.id}/repos`,
      })) as any[];
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }
}
