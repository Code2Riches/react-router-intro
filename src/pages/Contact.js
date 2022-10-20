import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react"

const ContactPage = () => {

    const [signupList, handleAddSignup] = useOutletContext();

    const navigate = useNavigate();

    const redirectUserFunction = () => {
        navigate("/")
    }

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");


    return (
        <div>

            <div className="contactPage">
                <div className="contactItems">
                    <h1>Contact Me !</h1>

                    <input type="text" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} />
                    <br />


                    <input type="text" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }} />
                    <br />


                    <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                    <br />
                    <br />

                    <button onClick={(e) => {
                        if (firstname === "" || lastname === "" || email === "") {
                            alert("Input fields must be filled in order to move on")
                        }
                        else {
                            redirectUserFunction()
                        }
                    }}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactPage