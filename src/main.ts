/* import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes, withHashRouting())]
}, appConfig);
  .catch((err) => console.error(err));
 */



  import { bootstrapApplication } from '@angular/platform-browser';
  import { AppComponent } from './app/app.component';
  import { appConfig } from './app/app.config';
  import { provideRouter } from '@angular/router';
  import { routes } from './app/app.routes';
  
  import { LocationStrategy, HashLocationStrategy } from '@angular/common';
  
  bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...(appConfig.providers || []),
      provideRouter(routes),
      { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
  }).catch((err) => console.error(err));
  