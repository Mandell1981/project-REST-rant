const React = require('react')
const Def = require('../default.jsx')

function comments_form (data) {
    return (
        <Def>
            <main>
                <h1>Comment</h1>
                <form method="POST" action="/places/${data}?_method=PUT">
               <div className="row">
                     <div className="form-group col-sm-6">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" type="text" id="author" name="author"required />
                     </div>
                     <div className="form-group col-sm-6">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content" name="content"required></textarea> 
                     </div>
                     <div className="form-group col-sm-6">
                        <label htmlFor="starRating" class="form-label"></label>
                        <input className="form-control" type="number" id="starRating" name="starRating" step="0.5"required/>
                     </div>
                     <div className="form-group col-sm-6">
                        <label class="form-check-label" for="rant">Rant</label>
                        <input type="checkbox" class="form-check-input" id="rant" name="rant" />
                     </div>
                </div>
                    <button type="submit" class="btn btn primary">Submit</button>

                </form>
            </main>
        </Def>
    )
}

module.exports = comments_form