import FaceIcon from "@mui/icons-material/Face";
import { Button } from "@material-ui/core";

export default function Form() {
    return (
        <>
            <div className="Form">
                <form className="FormData">
                    <div className="FormRow">
                        <div className="FormGroup">
                            <Button className="Label" tabIndex="-2">
                                <FaceIcon />
                            </Button>
                            <input
                                type="text"
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
                                className="FormControl"
                                id="first-name"
                                placeholder="Last name"
                            />
                        </div>
                    </div>

                    <div className="FormGroup">
                        <Button className="Label" tabIndex="-1">
                            <FaceIcon />
                        </Button>
                        <input
                            type="email"
                            className="FormControl"
                            id="first-name"
                            placeholder="Email"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
