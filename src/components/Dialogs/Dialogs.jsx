import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} photo={d.photo}/>);

    let messagesElements = state.messages
        .map(m => <Message message={m.message}/>);



    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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
                             value={props.newMessageText}/>
                </div>

                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;