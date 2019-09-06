let initialState = {
    friends: [
        {
            id: 1,
            name: 'Ivan',
            photo: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80'
        },
        {
            id: 2,
            name: 'Petro',
            photo: 'https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
            id: 3,
            name: 'Lida',
            photo: 'https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'
        },
    ]
};


const sidebarReducer = (state = initialState, action) => {

    return state;
};

export default sidebarReducer;