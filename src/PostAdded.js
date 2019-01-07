import React, {Component} from 'react';

class PostAdded extends Component {
    constructor(props) {
      super();
      this.deletepost = this.deletepost.bind(this);
    }

    deletepost() {

    }

    render() {
            return (
            <ul>
              { this.props.posts.map((post, i) =>
                <li key={`${i}-post`}><h3>{post.title}</h3><span>{post.post}</span>
                <input type="button" value="Delete" onClick={this.deletepost}/>
                </li> 
               )}        
            </ul>
            )
        }    
}
export default PostAdded;