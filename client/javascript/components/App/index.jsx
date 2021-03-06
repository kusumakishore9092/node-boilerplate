import React, {Component} from 'react';
import Button from 'client/javascript/components/Button';
import Footer from 'client/javascript/components/Footer';
import Header from 'client/javascript/components/Header';
import UtilityNav from 'client/javascript/components/UtilityNav';
import './index.style';

export default class App extends Component {
  render() {
    return(
        <div>
          <UtilityNav />
          <Header />
          <Button />
          <Footer />
        </div>
      )
    }
}
