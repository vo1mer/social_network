import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElement = props.messagesPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} photo={d.photo}/>);

    let messagesElements = props.messagesPage.messages
        .map(m => <Message message={m.message}/>);

    // let newMessageElement = React.createRef();


    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElement
                }
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>

                <div>
                    <textarea
                        // ref={newMessageElement}
                             onChange={onMessageChange}
                             value={props.messagesPage.newMessageText}/>
                </div>

                <div>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;