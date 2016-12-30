export class Task {
    constructor(public title: string,
                public description: string,
                public priority: number = 1,
                public completed: boolean = false) {}
}