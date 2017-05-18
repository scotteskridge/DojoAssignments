export class Note {
    id;
    author = {}
    body = ""

    constructor(id = 0, author = {}, body = ""){
        this.id = id
        this.author = author
        this.body = body

    }
}
