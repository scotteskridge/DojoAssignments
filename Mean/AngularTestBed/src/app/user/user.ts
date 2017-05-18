export class User {
    first_name;
    last_name;
    age;
    
    constructor(first_name = "", last_name="", age=0){
        this.first_name = first_name
        this.last_name = last_name
        this.age = age
    }
}
