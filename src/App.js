import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={props.state.sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() =>
                           <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}/>
                       }/>
                <Route path='/dialogs'
                       render={() =>
                           <Dialogs
                               dialogs={props.state.messagesPage.dialogs}
                               messages={props.state.messagesPage.messages}/>
                       }/>

                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/settings' component={Settings}/>*/}


            </div>
        </div>

    );
};

export default App;
