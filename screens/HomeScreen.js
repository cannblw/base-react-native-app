import React from 'react';

import { StyleSheet } from 'react-native';

import { withNavigation } from 'react-navigation';

import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';

import ArticleList from '../components/ArticleList';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Artículos destacados</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ArticleList />

          <Button onPress={ this.onButtonPress } style={ styles.articleButton }><Text>Navegar a otro lado</Text></Button>
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

export default withNavigation(HomeScreen);