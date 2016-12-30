/* Application component */

import { Component } from "@angular/core";

const tasks = [
    {
        title: 'Learn JavaScript',
        priority: 10,
        completed: true
    },
    {
        title: 'Learn Angular 2',
        priority: 10,
        completed: false
    },
    {
        title: 'Create application',
        priority: 9,
        completed: false
    }
];

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
    tasks = tasks;

    getCompletedTasks() {
        let result: any = [];
        for (let task of tasks) {
            if (task.completed) {
                result.push(task);
            }
        }

        return result;
    }

    getUnCompletedTasks() {
        let result: any = [];
        for (let task of tasks) {
            if (!task.completed) {
                result.push(task);
            }
        }

        return result;
    }

    completeTask(task: any) {
        task.completed = true;
    }

    openTask(task: any) {
        task.completed = false;
    }
}