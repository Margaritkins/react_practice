//child
import React, { Component } from "react";
import styles from './Counter.module.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
    };
  }

  handlerClick = () => {
    this.setState((state, props) => {
      if (state.isAdd) {
        return { count: state.count + props.step };
      }
      return { count: state.count - props.step };
    });
  };

  hndleCheck = ({ target: { checked } }) => {
    this.setState({ isAdd: checked });
  };

  render() {
    const { count, isAdd, check } = this.state;
    const { step } = this.props;
    return (
      <section className={styles.counterWrapper}>
        <h2 className={styles.h2}>count: {count}</h2>
        <h2 className={styles.h2}>step {step}</h2>
        <button onClick={this.handlerClick}>count {isAdd ? "+" : "-"}</button>
        <label>
          change mode
          <input
            type="checkbox"
            name="check"
            checked={isAdd}
            onChange={this.hndleCheck}
          />
        </label>
      </section>
    );
  }
}

export default Counter;
