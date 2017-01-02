/* Application component */

import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Task } from "./models/task";
import { TaskService } from "./services/task.service";

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
    styleUrls: ['app.component.css'],
    providers: [ TaskService ] // Services
})
export class AppComponent implements OnInit {
    title: string = 'Task manager';

    tasks: Task[] = [];
    taskTitle: string = '';
    taskPriority: number = 1;
    taskDescription: string = '';

    // Using Dependency Injection for create a service
    constructor(private service: TaskService) { }

    ngOnInit() {
        this.tasks = this.service.getTasks();
    }

    private resetFields() {
        this.taskTitle = '';
        this.taskPriority = 1;
        this.taskDescription = '';
    }

    addTask() {
        let task: Task = new Task(this.taskTitle, this.taskDescription, this.taskPriority);
        this.tasks.push(task);

        this.resetFields();
    }

    getCompletedTasks() {
        let result: Task[] = [];
        for (let task of this.tasks) {
            if (task.completed) {
                result.push(task);
            }
        }

        return result;
    }

    getUnCompletedTasks() {
        let result: Task[] = [];
        for (let task of this.tasks) {
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