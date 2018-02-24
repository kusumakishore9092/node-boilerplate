import React, {Component} from 'react';
import './index.style';

export default class Button extends Component {
  render() {
    return(
        <div class="wrapper">
          <button className='btn btn-primary'>I am a button</button>
        </div>
      )
    }
}
