import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    let dialogsElement = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} photo={d.photo}/>);

    let messagesElements = props.messages
        .map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElement
                }
            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }

                <textarea ref={newMessageElement}> </textarea>
                <div>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;