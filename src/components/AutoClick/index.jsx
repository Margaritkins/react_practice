import React, { Component } from "react";

class AutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoCount: 0,
    };
    this.autoCountID = null;
  }
  autoStep = () => {
    this.setState((state, props) => {
      const { autoCount } = state;
      
      return (autoCount = autoCount + 1);console.log(autoCount);
    });
  };

  handlerClick = () => {
    if (this.autoCountID === null && this.autoCountID <= 30) {
      this.autoCountID = setTimeout(this.autoStep, 1000);
    }
  };

  componentDidMount() {
    this.handlerClick();
  }

  render() {
    const { autoCount } = this.state;
    return (
      <section>
        <h2>autocount: {autoCount}</h2>
        <button onClick={this.handlerClick}>AutoClick</button>
      </section>
    );
  }
}

export default AutoClick;
