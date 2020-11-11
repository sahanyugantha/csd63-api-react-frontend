
function AddPostComponent(){

    return(
        <div className="conatiner">
            <div className="row">
                <div className="col-sm-8 offset-sm-2">

                    <h4>Add a Post</h4>
                  
                    <form>
                        <div className="form-group">
                            <label for="post-body">Please create your post</label>
                            <textarea type="text" className="form-control" id="post-body" ></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Publish</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default AddPostComponent;