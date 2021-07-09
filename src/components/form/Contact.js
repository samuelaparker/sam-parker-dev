import React, { useState } from "react"
import axios from "axios";
import styled from 'styled-components';

const ContactFormWrapper = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
const FormLabel = styled.label`
        display: flex;
        flex-direction: column;
        width: 30vw;
    `;
const FormButton = styled.button`
    text-align: center;
    width: 8vw;
    height: 3em;
    margin-top: 0.4em;
    background-color: #597D61;
    color: white;
    border-radius: 12px;
    text-decoration: none;
    border: none;
    &:hover {
    background-color: rgb(92, 92, 92);
    }
`;


const Contact = () => {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/8a0958bf-20c5-4124-9c42-12fb5ba9f15c",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    return (

        // <div>
        //      <div className="col-md-8 mt-5">
        //         <h3>Getform.io Gatsby Form Example</h3>
        //         <form onSubmit={handleOnSubmit}>
        //           <input type="email" name="email" placeholder="Your Email">
        //           <input type="text" name="name" placeholder="Your Name">
        //           <input type="text" name="message" placeholder="Your Message">
        //           <button type="submit">Send</button>
        //       </form>
        //     </div>
        //   </div>
        <ContactFormWrapper onSubmit={handleOnSubmit}>
            <FormLabel>
                Name
                <input type="text" name="name" id="name" />
            </FormLabel>
            <FormLabel>
                Email
                <input type="email" name="email" id="email" />
            </FormLabel>
            <FormLabel>
                Subject
                <input type="text" name="subject" id="subject" />
            </FormLabel>
            <FormLabel>
                Message
                <textarea name="message" id="message" rows="5" />
                <FormButton type="submit">Send</FormButton>
            </FormLabel>
        </ContactFormWrapper>
    )
}
export default Contact;
