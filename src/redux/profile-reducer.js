const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'UPDATE-SET_USER_PROFILE-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you ?', like: 25},
        {id: 2, message: 'It\'s my first message', like: 13},
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPostText = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: newPostText, like: 10}]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
};

export const addPostAC = () => {
    return {type: ADD_POST}
};

export const updateNewPostAC = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
};

export default profileReducer;