import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import { UserboxComponent } from './app/components/userbox/userbox.component';


//bootstrapApplication(UserboxComponent, appConfig)
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
