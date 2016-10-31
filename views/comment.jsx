'use babel';

import React from 'react';

export default class Comment extends React.Component {
  render() {
    return(
      <p className='comment'>
        {this.props.name}
      </p>
    )
  }
}
Comment.defaultProps = {
  name: 'Electronで伺か作るよ'
};
