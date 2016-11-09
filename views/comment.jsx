'use babel';

import React from 'react';

export default class Comment extends React.Component {
  onClick(e) {
    console.log(this);
  };
  render() {
    return(
      <p className='comment' onClick={this.onClick}>
        {this.props.name}
      </p>
    )
  }
}
Comment.defaultProps = {
  name: 'Electronで伺か作るよ'
};
