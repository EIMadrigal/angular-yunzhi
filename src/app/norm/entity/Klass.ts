import { Teacher } from "./Teacher";

export class Klass {
    id!: number;
    name!: string;
    teacher!: Teacher;
    
    constructor(id: number, name: string, teacher: Teacher) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
    }
    
}