import './App.css';
import React, {Component} from 'react';
import { connect } from "react-redux";
import * as ACTIONS from "./store/actions/actions";

class App extends Component {
  componentDidMount = () => {
    this.props.getData();
  }

  render() {
    return (
      <div className="App">
        {console.log(this.props.data)}
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  
  return {
    data: state.setDataReducer.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(ACTIONS.getDataAction())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
