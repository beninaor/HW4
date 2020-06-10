import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            password: null,
            data: [],
            resp: null
        };
    }


    changeUsername = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    }

    doLogin = (e) => {
        const url = "http://localhost:5000/login";
        const data = {
            name: this.state.name,
            password: this.state.password
        }
        axios.post(url, data)
            .then((res) => {
                if(res.status === 200) {
                    this.setState({
                        data: [],
                        resp: "Success: user logged in."
                    });
                    alert(this.state.resp)
                    this.props.history.push("/")
                }
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    data: [],
                    resp: "Error: failed to login user try to signup."
                });
                alert(this.state.resp)

            });
    }


    render() {
        return (
            <div>
                <h2>Login</h2>
                <div>
                    name: <input type="text" onChange={this.changeUsername} placeholder={"Enter name"} required></input><br/>
                    password: <input type="password" onChange={this. changePassword} placeholder="Enter Password" required></input><br/>
                    <button onClick={this.doLogin}>send</button><br/>
                    {this.state.resp?this.state.resp:null}
                </div>
            </div>
        );
    }
}
export default Login;
