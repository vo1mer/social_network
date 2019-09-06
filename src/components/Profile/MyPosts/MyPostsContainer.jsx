import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.store.dispatch(addPostActionCreator());
    };

    let updateNewPostText = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };

    return  (<MyPosts addPost={addPost} updateNewPostText={updateNewPostText}
                      posts={state.profilePage.posts}
                      newPostText={state.profilePage.newPostText}/> );
};

export default MyPostsContainer;