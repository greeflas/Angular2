/* Application module */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent], // components
    bootstrap: [AppComponent] // component for application start
})
export class AppModule {

}