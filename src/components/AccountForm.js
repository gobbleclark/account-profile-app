import React from "react";
import { Form, } from "semantic-ui-react";

class AccountForm extends React.Component {
  state = { firstName: "", 
            lastName: "",
            email: "",
            avatar: "" };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { firstName, lastName, email, avatar } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.input
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <Form.input
          label="Email Address"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.input
          label="Profile Picture"
          name="avatar"
          value={avatar}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}


export default AccountForm;
