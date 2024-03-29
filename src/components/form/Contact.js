import { useState } from "react"
import * as React from 'react'
import axios from "axios";
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { globalColors } from '../../assets/GlobalStyles'

var Recaptcha = require('react-recaptcha');

const Contact = () => {

    //GETFORM CODE BELOW
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
    console.log(serverState);
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        console.log(e)
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

    //RECAPTCHA CODE BELOW
    // create a variable to store the component instance
    let recaptchaInstance;

    // manually trigger reCAPTCHA execution
    const executeCaptcha = function () {
        // recaptchaInstance.useRef().current.execute();
        recaptchaInstance.execute();
    };


    // executed once the captcha has been verified
    // can be used to post forms, redirect, etc.
    const verifyCallback = function (response) {
        console.log(response);
        document.getElementById("form").submit();
    };
    return (
        <ContactFormWrapper onSubmit={handleOnSubmit} id="form" action="https://getform.io/f/8a0958bf-20c5-4124-9c42-12fb5ba9f15c" method="POST">
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <FormTitle>
                Connect with me!
            </FormTitle>
            <FormLabel>
                Name
                <StyledInput type="text" name="name" id="name" />
            </FormLabel>
            <FormLabel>
                Email
                <StyledInput type="email" name="email" id="email" />
            </FormLabel>
            <FormLabel>
                Subject
                <StyledInput type="text" name="subject" id="subject" />
            </FormLabel>
            <input type="hidden" id="captchaResponse" name="g-recaptcha-response"></input>
            <FormLabel>
                Message
                <StyledTextArea name="message" id="message" rows="5" />
                <FormButton onClick={executeCaptcha} type="submit">Send</FormButton>
            </FormLabel>

            <RecaptchaStyled
                ref={e => recaptchaInstance = e}
                sitekey="6LdHi4cbAAAAAFteU3kk_PHpOdij6TzG_5J_um1Q"
                size="invisible"
                verifyCallback={verifyCallback}
            />

        </ContactFormWrapper>
    )
}

const FormTitle = styled.h1`
    font-size: 1.8em;
`;

const RecaptchaStyled = styled(Recaptcha)`
    visibility: hidden;
    `;

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
        min-width: 200px;
        
    `;
const FormButton = styled.button`
    text-align: center;
    width: 8vw;
    min-width: 100px;
    height: 3em;
    margin-top: 0.4em;
    text-decoration: none;
    border: .2rem solid;
    &:hover {
    background-color: ${globalColors.brandGreen};
    }
`;

const StyledInput = styled.input`
    border: .2rem solid;
    min-height: 25px;
`;

const StyledTextArea = styled.textarea`
    border: .2rem solid;
`;

export default Contact;

