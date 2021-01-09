import Loader from 'react-loader-spinner';
import React, {Component} from 'react';

 export default class App extends Component {
    render() {
     return(
      <Loader
         type="BallTriangle"
         color="#ab3320"
         height={100}
         width={100}
         timeout={0} //3 secs
      />
     );
    }
 }