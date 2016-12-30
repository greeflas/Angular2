/* Application component */

import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Task } from "./Task";

const tasks: Task[] = [
    {
        title: 'Learn JavaScript',
        description: '',
        priority: 10,
        completed: true
    },
    {
        title: 'Learn Angular 2',
        description: '',
        priority: 10,
        completed: false
    },
    {
        title: 'Create application',
        description: '',
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
    title: string = 'Angular 2';
    tasks: Task[] = tasks;

    newTitle: string = '';
    newPriority: number = 1;
    newDescription: string = '';

    private resetFields() {
        this.newTitle = '';
        this.newPriority = 1;
        this.newDescription = '';
    }

    addTask() {
        let task: Task = new Task(this.newTitle, this.newDescription, this.newPriority);
        tasks.push(task);

        this.resetFields();
    }

    getCompletedTasks() {
        let result: Task[] = [];
        for (let task of tasks) {
            if (task.completed) {
                result.push(task);
            }
        }

        return result;
    }

    getUnCompletedTasks() {
        let result: Task[] = [];
        for (let task of tasks) {
            if (!task.completed) {
                result.push(task);
            }
        }

        return result;
    }

    completeTask(task: Task) {
        task.completed = true;
    }

    openTask(task: Task) {
        task.completed = false;
    }
}