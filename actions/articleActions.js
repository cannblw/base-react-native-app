import {
  GET_ARTICLES
} from './actionTypes';

// THUNKS
export const getArticles = page => {
  return dispatch => {
    /*
     * Petición a un api o cualquier acción asíncrona.
     * En una app real, los thunks se usan para realizar algún
     * proceso asíncrono antes de invocar una acción, que siempre
     * devolverá un objeto plano de Javascript.
     * 
     * A efectos de esta demostración, se devolverá una promesa con
     * datos hardcoded en vez.
     */
    const articles = new Promise((resolve, _) => {
      resolve([{
        author: 'Edgar',
        title: 'Las sombras del ayer',
        description: 'Hubo sombras y ya no'
      },
      {
        author: 'Manuel',
        title: 'La sociedad y sus cosas',
        description: 'Hubo sociedad y ya no'
      }]);
    }).then(articles => {
      dispatch(getArticlesActionCreator(articles));
    });
  }
}

// ACTION CREATORS
const getArticlesActionCreator = articles => {
  return {
    type: GET_ARTICLES,
    payload: {
      articles: articles
    }
  }
}
