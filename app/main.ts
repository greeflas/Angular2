import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// Import application module
import { AppModule } from "./app.module";

// Create a platform for application work
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);