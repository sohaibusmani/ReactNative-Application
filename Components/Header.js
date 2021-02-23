import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class HeaderIconExample extends Component {
  render() {
    const {navigation} = this.props;
    const openMenu = () => {
          navigation.openDrawer()
    };

    return (
      <Container>
        <Header>
          <Left>
          <Button 
          transparent
          onPress={openMenu}
          >
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