
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    // Add any required providers like routing or HTTP client here
    provideRouter([]),
  ],
}).catch(err => console.error(err));
