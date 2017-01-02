let currentId = 0;

export class Task {
    public id: number;

    constructor(
        public title: string,
        public description: string,
        public priority: number = 1,
        public completed: boolean = false
    ) {
        this.id = currentId++;
    }
}