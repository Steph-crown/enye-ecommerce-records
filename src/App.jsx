import './App.css';
import React, {Component} from 'react';
import { connect } from "react-redux";
import * as ACTIONS from "./store/actions/actions";
import Container from './components/Container'

// import Loader from './components/Loader';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {error: false}
  }
  componentDidMount = () => {
    this.props.getData();

    // Supplies a warning if failed to fetch after 30 seconds
    setTimeout(() => {
      if (!this.props.data) {
        this.setState({error: true})
        console.log(this.state.error)
      }
    }, 20000);
  }

  
  render() {
    const cont = {
      color: "#ffffff",
      backgroundColor: "#1e1e1e"
    };

    return (
      <div className="App" style={cont}>
        {/* <div className="loader" style={{display: this.props.data ? "block" : "none"}}>
          <Loader />
        </div>
        <h1 className="h1" style={{display: this.state.error && !this.props.data ? "flex" : "none"}}>ERROR: INTERNET DISCONNECTED. <br /> Connect Your Internet and Refresh</h1> */}

        <div style={{display: this.props.data ? "block" : "block"}} >
          <Container />
        </div>
        
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  
  return {
    data: state.setDataReducer.data,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(ACTIONS.getDataAction())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
