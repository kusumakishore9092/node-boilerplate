import React, {Component} from 'react';
import Button from 'client/javascript/components/Button';
import Footer from 'client/javascript/components/Footer';
import './index.style';

export default class Header extends Component {
  render() {
    return(
        <div className="main-header">
          <div className="wrapper">
            <h1>Header</h1>
          </div>
        </div>
      )
    }
}
