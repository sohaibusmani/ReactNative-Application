import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Time Tracking App</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}