//parent
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Counter from "./Counter";
import styles from './BlockCounter.module.css'


class BlockCounter extends Component {
  /**
   * 
   * @param {object} props 
   */
  constructor(props) {
    super(props);
    this.state = { step: 1 };
  }

  handleBlur = ({ target: { value } }) => {
    if (value === "") {
      this.setState({
        step: 1,

      });
    }
  };

  handleInput = (event) => {
    const value = Number(event.target.value);
    this.setState({
      step: value >= 1 && value <= 1000000 ? value : "",
    });
  };

  render() {
    return (
      <section className={styles.wrapper}>
        <Counter  />
        <input
        className={styles.input}
          onBlur={this.handleBlur}
          type="number"
          value={this.state.step}
          onChange={this.handleInput}
        />
      </section>
    );
  }
}

// BlockCounter.propTypes = {step: PropTypes.number.isRequired};
// BlockCounter.defaultProps={  step: 1}
export default BlockCounter;
