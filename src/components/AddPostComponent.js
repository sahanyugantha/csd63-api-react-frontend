import React, { Component } from 'react';
import axios from 'axios';

class AddPostComponent extends Component{

    state = {
        author : "",
        body : ""
    }

    onAuthorChange = (e) => {
        //console.log("Author name ---> "+e.target.value);
        this.setState({
            author : e.target.value
        });
    }

    onBodyChange = (e) => {
        this.setState({
            body : e.target.value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const API_URL_ENDPOINT = "http://localhost:8082/api/v1/posts";

        const data = {
            author : this.state.author,
            body : this.state.body
        }

        axios.post(API_URL_ENDPOINT, data)
        .then(res => console.log("Response ---> "+res))
        .catch(err => console.log("Error : "+err));

    }

    render(){
        return(
            <div className="conatiner">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">

                        <h4 className="mt-2">Add a Post</h4>
                    
                        <form className="mt-4" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="post-author">Enter the author's name</label>
                                <input type="text" onChange={this.onAuthorChange}  className="form-control" id="post-author" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="post-body">Type your post</label>
                                <textarea type="text" onChange={this.onBodyChange} className="form-control" id="post-body" ></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Publish</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPostComponent;