import React, { Component } from 'react'
import RecoverPassword from './RecoverPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';

export class MainContact extends Component
{
    constructor(props) {
        
        super(props);
        
        this.state = {
            yourEmail: 'example@example.com',
            yourSubject: 'Subject select',
            yourMessage: 'Type your message here'
        };

        this.handleInputChangeEmail = this.handleInputChangeEmail.bind(this);
        this.handleInputChangeSubject = this.handleInputChangeSubject.bind(this);
        this.handleInputChangeMessage = this.handleInputChangeMessage.bind(this);

        }

        handleInputChangeEmail(event)
        {
            const value = event.target.value;
            
            this.setState({
                yourEmail:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleInputChangeSubject(event)
        {
            const value = event.target.value;
            
            this.setState({
                yourSubject:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleInputChangeMessage(event)
        {
            const value = event.target.value;
            
            this.setState({
                yourMessage:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }


        handleSubmit(event)
        {
            
            document.getElementById("mainShow").style.display = "block";
            event.preventDefault();
        }
    
      render() {
        return (
            <div class="main">
               
                <div class="left">
                    <div class="leftForm">
                        <SignIn/>
                        <RecoverPassword/>
                    </div>
                    <div class="rightForm">
                        <SignUp/>
                    </div>

                    <div class="bottomForm">
                        <form onSubmit={this.handleSubmit} id="mainForm">
                        <div class="contactBlue">
                            <span class="title">
                                CONTACT FORM
                            </span>
                        </div>
                        <div class="bottomLeft">
                            <label>
                            <span class="nameOfInput marginClass marginTop">
                                YOUR EMAIL
                            </span>
                            <input
                                name="email"
                                type="email"
                                class="inputElement"
                                placeholder={this.state.yourEmail}
                                onChange={this.handleInputChangeEmail} />
                            </label>
                            <br />
                            <label>
                            <span class="nameOfInput marginClass">
                                SUBJECT
                            </span>
                            <select value={this.state.yourSubject} class="selectElement" onChange={this.handleInputChangeSubject}>
                                <option value="select">Select subject</option>
                                <option value="Application">Application</option>
                                <option value="Software">Software</option>
                                <option value="anoter">anoter...</option>
                                </select>
                            </label>
                            <button type="submit" class="buttonSendMain">
                            Send
                        </button>
                        <button type="cancel" class="buttonCancelMain">
                            Cancel
                        </button>
                        </div>
                        <div class="bottomRight">
                            <label>
                            <span class="nameOfInput marginClass marginTop">
                                MESSAGE
                            </span>
                            <textarea value={this.state.yourMessage} onChange={this.handleInputChangeMessage} class="textareaMain"/>
                        </label>
                        </div>

                    </form>
                    </div>

                </div>

                <div class="right">
                    <div id="mainShow">
                        <p>
                            Email: {this.state.yourEmail}
                        </p>
                        <p>
                            Subject: {this.state.yourSubject}
                        </p>
                        <p>
                            Message: {this.state.yourMessage}
                        </p>
                        <hr/>
                    </div>
                </div>
            
            </div>
          
        );
      }
}

export default MainContact;
