'use babel';

import React from 'react';

export default class Character extends React.Component {
  render() {
    const chara_src ='img/'+ this.props.character +'.png';
    console.log(chara_src);
    return(
      <img id={this.props.character} src={chara_src}></img>
    )
  }
}
Character.defaultProps = {
  character: 'sakura'
};
