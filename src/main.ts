import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from './app/app.module';

console.log("Main file message")

platformBrowserDynamic().bootstrapModule(AppModule)