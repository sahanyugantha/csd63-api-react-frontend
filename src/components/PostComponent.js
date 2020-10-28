import React, { Component } from 'react';

class PostComponent extends Component{

    render(){
        return(
            <div className="conatiner">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div className="card mt-3">
                            <div className="card-header">
                                <h6>Sahan</h6>
                            </div>
                            <div className="card-body">
                                <h5>Title</h5>
                                This is some text within a card body.
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary">Like</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default PostComponent;