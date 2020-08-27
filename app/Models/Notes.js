import { generateId } from "../Utils.js"
export default class Note {
    constructor(title, body, comments, id) {
        this.title = title
        this.body = body
        this.comments = comments || ["Test Comment"]
        this.id = id || generateId()
    }

    get Template() {
        return `

        <div class="card w-auto m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.body}</p>
            </div>
            ${this.CommentsTemplate}
            <div class="row m-2" id="comment">
                    <div class="col-12">
                        <form onsubmit="app.notesController.postComment(event, '${this.id}')">
                            <div class="form-group">
                                <hr>
                                <label for="commentBody"><b>Make Comment</b></label>
                                <textarea class="form-control" id="commentBody" name="commentBody" rows="2"></textarea>
                            </div>
                            <button class="btn btn-primary form-control" type="submit">Post Comment</button>
                        </form>
                    </div>
                </div>
        </div>
        `
    }

    get CommentsTemplate() {
        let template = ``
        for (let i = 0; i < this.comments.length; i++) {
            template += `
            <hr></hr>
            <p class="px-4">${this.comments[i]}</p>
            `
        }
        return template
    }
}