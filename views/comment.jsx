'use babel';

import React from 'react';

export default class Comment extends React.Component {
  render() {
    return(
      <p className='comment' style={{
          border:'medium dotted #999',
          background:'#FFFFFF',
          padding:'10px',
          width : '200px',
        }}>
        Electronで伺か作るよ!
      </p>
    )
  }
}
