import React from 'react';

import { StyleSheet } from 'react-native';

import { withNavigation } from 'react-navigation';

import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';

class DetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Detalle</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Text>DETALLE :D</Text>
        </Content>
      </Container>
    );
  }

  onButtonPress() {
    this.props.navigation.navigate('Detail');
  }
}

const styles = StyleSheet.create({
  articleButton: {
    marginTop: 24,
    width: '80%',
    alignSelf: 'center'
  }
});

export default withNavigation(DetailScreen);