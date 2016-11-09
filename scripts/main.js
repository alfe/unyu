import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';
import Comment from '../views/comment.jsx';
import Character from '../views/character.jsx';


window.onload = function(){
  ReactDOM.render(<Main />, document.body);
  ReactDOM.render(<Comment name="伺かってこんなんだっけ…?" />, document.getElementById('comment_sakura') );
  ReactDOM.render(<Comment name="まぁ、似せてるだけやしなぁ" />, document.getElementById('comment_unyu') );
  ReactDOM.render(<Character character="sakura" />, document.getElementById('character_sakura') );
  ReactDOM.render(<Character character="unyu" />, document.getElementById('character_unyu') );
}
