import React, {Component} from "react";
import { observer } from "mobx-react";
// or less ideally
import {Button, Form, ProgressBar} from 'react-bootstrap';
import AuthContext from "../stores/AuthStore";
/* Use class component here does not makes sense.
Just want to show how to use our Mobx Context with a class component
in case you do need.
*/
class AuthForm extends Component {
    /* Make available the context to the whole class via this.context */
    static contextType = AuthContext;

    login =async () => {
        await this.context.doLogin();
    };
    getComments =async () => {
        await this.context.doGetComments();
    };

    render() {
        if (this.context.loading===true) {
            return (<ProgressBar animated now={100} />);
        }
        return (
            <Form>
                <h3>{this.context.loading.toString()}</h3>
                {this.context.data !=={} &&
                <pre>
                    {this.context.data}
                </pre>
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary"  onClick={this.login}>
                    Submit
                </Button>
                <Button variant="secondary"  onClick={this.getComments}>
                    Commentaires
                </Button>
            </Form>
        );
    }
}

export default observer(AuthForm);


