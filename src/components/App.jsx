import React, { Component } from "react";
import { increment } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1>Count: {this.props.count}</h1>
        <button
          className="btn btn-primary btn-lg"
          onClick={this.props.increment}
        >
          INCREMENT
        </button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(
  mapStateToProps,
  {
    increment
  }
)(App);
