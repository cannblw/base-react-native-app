import React from 'react';

import { StyleSheet } from 'react-native';

import {
  Text,
  View
} from 'native-base';

import { connect } from 'react-redux';

import { getArticles } from '../actions/articleActions';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    // Get articles
    this.props.dispatch(getArticles());
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>ARTICLE LIST: { JSON.stringify(this.props.articles) }</Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
});

const mapStateToProps = state => {
  return {
    articles: state.articles.articles
  }
}


export default connect(mapStateToProps)(ArticleList);