import './ChatBox.css'
import { FaPaperPlane } from "react-icons/fa";
import {Avatar} from '@material-ui/core';

const ChatBox = () => {
    return ( 
        <div className="ChatBox">
            <div className="Nav">
                <Avatar className="avtr" src="https://avatars.dicebear.com/api/human/hnjnajfnjdf1.svg"/>
                <h2 className="NavName">Margot Flores</h2>
            </div>
            <div className="ChatDisplay">
                <p className={`chatMessage ${true && 'chatReciever'}`}>Hey! this is a check this is a check this is a check!</p>
                <p className="chatMessage">Hey! this is a check!</p>
                <p className="chatMessage chatReciever">Hey! this is a check this is a check this is a check!</p>
                <p className="chatMessage">Hey! this is a check this is a check this is a check!</p>
                <p className="chatMessage chatReciever">Hey! this is a check this is a check this is a check!</p>
                
            </div>
            <div className="LastTab">
                <input className="MessageTextInputBox" type="text" placeholder="Write a message"/>
                <button>Send Text</button>
                <a className="iconToSend">
                    <FaPaperPlane/>
                </a>
            </div>
        </div>
     );
}
 
export default ChatBox;
