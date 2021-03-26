import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SnackbarService } from './snackbar.service';

export class AppConfig {
  serviceUrl: string;
  constructor(data: { serviceUrl?: string } = {}) {
    this.serviceUrl = data.serviceUrl;
  }
}

@Injectable({ providedIn: 'root' })
export class InitializerService {
  constructor(
    private httpClient: HttpClient,
    private snackbar: SnackbarService
  ) {}

  bootstrapAppSettings(): Promise<any> {
    console.warn(
      "Trying to read configuration from 'assets/config.json' to initialize the app."
    );
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get('assets/config.json').subscribe(
        (data) => {
          const ob: AppConfig = new AppConfig(data);
          if (ob.serviceUrl) {
            environment.serviceUrl = ob.serviceUrl;
          }
          console.info('Configuration read. Initialization DONE.');
          resolve(true);
        },
        (error) => {
          console.error("App critical task failed. Can't read configuration.");
        }
      );
    });
  }
}
