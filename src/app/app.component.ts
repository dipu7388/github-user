import { HttpParams } from '@angular/common/http';
import { Component, DoCheck } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppStateService } from './services/app-state.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'dk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dheerendra';
  menuFlag$: Observable<boolean> = this.appStateService.menuObs();
  val = false;
  tabs = [
    { label: 'Overview', path: 'overview' },
    { label: 'Repositories', path: 'repo' },
    { label: 'Projects', path: 'project' },
    { label: 'Packages', path: 'package' },
  ];
  loading;
  constructor(
    private appStateService: AppStateService,
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log(
      activatedRoute.snapshot.params //.snapshot.children[0].params.id
    );
    activatedRoute.params.subscribe((e) => {
      console.log(e);
    });
  }

  async fetchData() {
    let params = new HttpParams();
    this.loading = true;
    try {
      let data = (await this.http.get({
        url: environment.serviceUrl,
        params,
      })) as any[];
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }
}
