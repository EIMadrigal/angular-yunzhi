export class Teacher {
    id!: number;
    name!: string;
    username!: string;
    email: string | undefined;
    gender: boolean | undefined;
    createTime!: Date;

    constructor(id: number, name: string, username: string, email?: string, gender?: boolean) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.gender = gender;
    }

}