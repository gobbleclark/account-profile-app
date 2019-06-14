import React from "react";


const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  state = {
    firstName: "Gavin",
    lastName: "Clark",
    email: "gaivngclark4@gmail.com",
    avatar: ""
  };
    
  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;