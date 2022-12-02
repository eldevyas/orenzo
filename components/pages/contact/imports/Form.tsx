import FaceIcon from "@mui/icons-material/Face";
import EmailIcon from "@mui/icons-material/Email";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@material-ui/core";
import Select from "./components/Select";
import TimePicker from "./components/TimePicker";

export default function Form() {
    return (
        <>
            <div className="Form">
                <form className="FormData" autoComplete="off">
                    <div className="FormRow">
                        <div className="FormGroup">
                            <Button className="Label" tabIndex="-2">
                                <FaceIcon />
                            </Button>
                            <input
                                type="text"
                                name="fname"
                                className="FormControl"
                                id="first-name"
                                placeholder="First name"
                            />
                        </div>
                        <div className="FormGroup">
                            <Button className="Label" tabIndex="-1">
                                <FaceIcon />
                            </Button>
                            <input
                                type="text"
                                name="lname"
                                className="FormControl"
                                id="first-name"
                                placeholder="Last name"
                            />
                        </div>
                    </div>

                    <div className="FormGroup">
                        <Button className="Label" tabIndex="-1">
                            <EmailIcon />
                        </Button>
                        <input
                            type="email"
                            className="FormControl"
                            id="first-name"
                            placeholder="Email"
                        />
                    </div>

                    <div className="FormGroup">
                        <Button className="Label" tabIndex="-1">
                            <AttachMoneyIcon />
                        </Button>
                        <Select />
                    </div>
                    <div className="FormGroup">
                        <Button className="Label" tabIndex="-1">
                            <MessageIcon />
                        </Button>
                        <textarea
                            placeholder="Remember, be nice!"
                            cols={30}
                            rows={5}
                            className="FormControl Message"
                        ></textarea>
                    </div>

                    <div className="FormGroup">
                        <Button className="Label" tabIndex="-1">
                            <MessageIcon />
                        </Button>
                        <TimePicker />
                    </div>

                    <div className="FormGroup">
                        <Button className="Button" tabIndex="-1">
                            <SendIcon />
                            Send
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
