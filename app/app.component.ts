/* Application component */

import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'app', // HTML tag for application in index.html

    /* #1 - template for view */
    // template: '<h1>Angular 2</h1>'
    /* #2 - using class property in template */
    // template: '<h1>{{ title }}</h1>'
    /* #3 */
    // template: `
    //     <div class="container">
    //         <h1>Angular 2</h1>
    //     </div>
    // `
    /* #4 - using view file for template */
    templateUrl: 'app.component.html',

    /* CSS styles */
    // styles: []
    /* or */
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Angular 2';
}