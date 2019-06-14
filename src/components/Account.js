import React from "react";
import { Card, Image,  } from "semantic-ui-react";

const Account = () => (
  <Card>
      <Image src={avatar} />
    <Card.Content>
      <Card.Header> {firstName } {lastName} </Card.Header>
      <Card.Meta>
       {email}
      </Card.Meta>
    </Card.Content>
    </Card>
)

export default Account;