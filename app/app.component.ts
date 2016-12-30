/* Application component */

import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Task } from "./Task";

const tasks: Task[] = [
    {
        id: 1,
        title: 'Learn JavaScript',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        priority: 10,
        completed: true
    },
    {
        id: 2,
        title: 'Learn Angular 2',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        priority: 10,
        completed: false
    },
    {
        id: 3,
        title: 'Create application',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    title: string = 'Task manager';

    tasks: Task[] = tasks;
    id: number = 4;
    newTitle: string = '';
    newPriority: number = 1;
    newDescription: string = '';

    private resetFields() {
        this.newTitle = '';
        this.newPriority = 1;
        this.newDescription = '';
    }

    addTask() {
        let task: Task = new Task(this.id++, this.newTitle, this.newDescription, this.newPriority);
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