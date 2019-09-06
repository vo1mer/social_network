import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {


    let postsElement = props.posts.map(p => <Post message={p.message} key={p.id} like={p.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action)
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;