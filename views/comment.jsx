'use babel';

import React from 'react';

export default class Comment extends React.Component {
  propTypes: {
    name: '!!!'
  };
  render() {
    return(
      <p className='comment'>
        {this.props.name}
      </p>
    )
  }
}
