import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you ?', like: 25},
            {id: 2, message: 'It\'s my first message', like: 13},
        ],
        newPostText: ''
    },

    messagesPage: {
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Dattebayo'},
            {id: 4, message: 'Dattebayo'},

        ],
        dialogs: [
            {id: 1, name: 'Lana', photo: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80'},
            {id: 2, name: 'Vova', photo: 'https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
            {id: 3, name: 'Dima', photo: 'https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'},
            {id: 4, name: 'Maks', photo: 'https://images.unsplash.com/photo-1548260435-f3e7ec40e513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'},
        ]
    },

    sidebar: {
        friends: [
            {id: 1, name: 'Ivan', photo: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80'},
            {id: 2, name: 'Petro', photo: 'https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
            {id: 3, name: 'Lida', photo: 'https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'},
        ]
    }
};

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 10
    };
    // props.updateNewPostText('');
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;