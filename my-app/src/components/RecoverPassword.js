import React, { Component } from 'react'

export class RecoverPassword extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            yourEmail: 'example@example.com'
        };
    
        this.handleInputChangeEmail = this.handleInputChangeEmail.bind(this);
      }

        handleInputChangeEmail(event)
        {
            const value = event.target.value;
            
            this.setState({
                yourEmail:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleSubmit(event) {
            document.getElementById("recoverShow").style.display = "block";
            event.preventDefault();
          }
      render() {
        return (
          <form onSubmit={this.handleSubmit} id="recoverForm">
            <div class="contactRed">
                <span class="title">
                   RECOVER PASSWORD
                </span>
            </div>
            <label>
                <span class="nameOfInput marginClass marginTop">
                    EMAIL
                </span>
              <input
              class="inputElement"
                name="email"
                type="email"
                placeholder={this.state.yourEmail}
                onChange={this.handleInputChangeEmail} />
            </label>
            <br />
          
            <button type="submit" class="buttonSend">
                Send
            </button>
            <button type="cancel" class="buttonUp">
                Sign Up
            </button>
            <div id="recoverShow">
                <p>
                    Email: {this.state.yourEmail}
                </p>
                <hr/>
            </div>
          </form>
        );
      }
}
export default RecoverPassword;
