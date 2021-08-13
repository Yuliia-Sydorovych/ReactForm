import React, { Component } from 'react'

export class SignUp extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            fullname: 'Yuliia Sydorovych',
            email: 'example@example.com',
            password: '**********',
            gender: true,
            bio:'Something about you....'
        };
    
        this.handleInputChangeFullname = this.handleInputChangeFullname.bind(this);
        this.handleInputChangeEmail = this.handleInputChangeEmail.bind(this);
        this.handleInputChangePassword = this.handleInputChangePassword.bind(this);
        this.handleInputChangeGender = this.handleInputChangeGender.bind(this);
        this.handleInputChangeBIO = this.handleInputChangeBIO.bind(this);
      }

        handleInputChangeFullname(event)
        {
            const value = event.target.value;
            
            this.setState({
                fullname:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleInputChangeEmail(event)
        {
            const value = event.target.value;
            
            this.setState({
                email:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleInputChangePassword(event)
        {
            const value = event.target.value;
            
            this.setState({
                password:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleInputChangeGender(event)
        {
            const value = event.target.value;
            
            this.setState({
                gender:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleInputChangeBIO(event)
        {
            const value = event.target.value;
            
            this.setState({
                bio:value
            });

            this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        handleSubmit(event)
        {
            document.getElementById("signUpShow").style.display = "block";
            event.preventDefault();
          }
      render() {
        return (
    
            <form onSubmit={this.handleSubmit} id="signUpForm">
                <div class="contactPurple">
                     <span class="title">
                        SIGN UP
                    </span>
                </div>
                <label>
                <span class="nameOfInput marginClass marginTop">
                    FULL NAME
                </span>
                <input
                    name="email"
                    type="text"
                    placeholder={this.state.fullname}
                    onChange={this.handleInputChangeFullname}
                    class="inputElement"/>
                </label>
                <br />
                <label>
                <span class="nameOfInput marginClass">
                   YOUR EMAIL
                </span>
                        <input
                            name="email"
                            type="email"
                            placeholder={this.state.email}
                            class="inputElement marginBottom"
                            onChange={this.handleInputChangeEmail} />
                </label>

                <label>
                <span class="nameOfInput marginClass marginTop">
                    PASSWORD
                </span>
                    <input type="password" placeholder={this.state.password} class="inputElement" onChange={this.handleInputChangePassword}/>
                </label>
                <label>
                    <span class="nameOfInput marginClass marginTop">
                        YOUR GENDER
                    </span>
                    <input type="radio" name="sex" class="radioElement" value="Male" onChange={this.handleInputChangeGender}/>Male
                    <input type="radio" name="sex" value="Female" onChange={this.handleInputChangeGender}/>Female
                </label>
                
                <label>
                <span class="nameOfInput marginClass">
                    BIO
                </span>
                    <textarea placeholder={this.state.bio} class="textareaElement" onChange={this.handleInputChangeBIO}/>
                </label>
                <br/>
                <button type="submit" class="buttonSignUp">
                    Sign up
                </button>
                <button type="cancel" class="buttonCancel">
                    Cancel
                </button>

                <div id="signUpShow">
                    <p>
                        Fullname: {this.state.fullname}
                    </p>
                    <p>
                        Email: {this.state.email}
                    </p>
                    <p>
                        Password: {this.state.password}
                    </p>
                    <p>
                        Gender: {this.state.gender}
                    </p>
                    <p>
                        BIO: {this.state.bio}
                    </p>
                    <hr/>
                </div>
            </form>

            
          
        );
      }
}

export default SignUp;
