import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';
import Comment from '../views/comment.jsx';


window.onload = function(){
  ReactDOM.render(<Main />, document.body);
  ReactDOM.render(<Comment name="???" />, document.getElementById('comment') );
}
