import React, {Component} from 'react';
import PostAdded from './PostAdded.js';

    class AddUser extends Component {
        constructor(props) {
            super();
            this.state = {
              posts: [], 
              title: '',
              post: ''
            }
            this.handleClick = this.handleClick.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }
      
        handleChange(e) {
          this.setState({
            [e.target.name] : e.target.value
          })
        }
      
        handleClick() {
          let newPosts = [ ...this.state.posts, { title: this.state.title, post: this.state.post}]
          this.setState({
             posts: newPosts,
             title: '',
             post: ''
          })
        }
      
        render() {
            return(
                <div>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title here" />
                    <input type="text" name="post" value={this.state.post} onChange={this.handleChange} placeholder="Post here" />
                    <input type="button" onClick={this.handleClick} value="Add Post" /> 
                    <PostAdded posts={this.state.posts} /> 
                </div>
                )
            }    
        }

export default AddUser; 