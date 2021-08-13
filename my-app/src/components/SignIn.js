
import React, { Component } from 'react'

export class SignIn extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            username: '',
            checked: true,
            password: ''
        };
    
        this.handleInputUsername = this.handleInputUsername.bind(this);
        this.handleInputPassword = this.handleInputPassword.bind(this);
        this.handleInputChecked = this.handleInputChecked.bind(this);
        }
        
        handleInputUsername(event)
        {
            const value = event.target.value;
            
            this.setState({
                username:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleInputChecked(event)
        {
            const value = event.target.value;
            
            this.setState({
                checked:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleInputPassword(event)
        {
            const value = event.target.value;
            
            this.setState({
                password:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
            
        handleSubmit(event)
        {
            document.getElementById("signInShow").style.display = "block";
            event.preventDefault();
        }
        render() {
            return (
        
                <form onSubmit={this.handleSubmit} id="signInForm">
                    <div class="contactLightBlue">
                        <span class="title">
                            SIGN IN
                        </span>
                    </div>
                    <label>
                        <span class="nameOfInput marginClass marginTop">
                            USERNAME
                        </span>
                    <input
                        name="username"
                        type="text"
                        placeholder="example"
                        onChange={this.handleInputUsername} class="inputElement"/>
                    </label>
                    <br />
                    <label>
                        <span class="nameOfInput marginClass marginBottom">
                            PASSWORD
                        </span>
                        <input type="password"  onChange={this.handleInputPassword} placeholder="********" class="inputElement marginClass"/>
                    </label>
                    <label class="checkElement">
                    <input type="checkbox" onChange={this.handleInputChecked}/>
                        Remember me
                    </label>
                    <br/>
                    <button type="submit" class="buttonIn marginTopSecond" onClick={this.SignInButton}>
                        Sign in
                    </button>
                    <button type="cancel" class="buttonForgot marginTopSecond">
                        Forgot Password?
                    </button>
                    <div id="signInShow">
                        <p>
                            Username: {this.state.username}
                        </p>
                        <p>
                            Password: {this.state.password}
                        </p>
                        <p>
                            Remember me: {this.state.checked}
                        </p>
                        <hr/>
                    </div>
                </form>
                
        );
      }
}

export default SignIn;