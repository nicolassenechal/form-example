import React, { Component, PropTypes } from 'react';
import styles from './InputCounter.module.css';

import translations from 'translations';

export default class InputCounter extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    field: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    inputMax: PropTypes.number,
    maxLength: PropTypes.number,
  }

  static defaultProps = {
    inputMax: 1000
  }

  constructor(props, context) {
    super(props);
    this.state = {
      counter: props.inputMax,
      message: translations['inputcounter.message.plural']
    };
  }

  handleChange(event) {
    const { inputMax } = this.props;
    const length = (event.target.value).length;
    const counter = inputMax - length;
    let message = '';

    if (counter > 1 || counter === 0) {
      message = translations['inputcounter.message.plural']
    } else if (counter === 1) {
      message = translations['inputcounter.message.singular']
    } else if (counter < 0) {
      message = translations['inputcounter.message.over']
    }

    this.setState({
      counter,
      message,
    });
  }

  render() {
    const { field, onChange, placeholder } = this.props;
    const { counter, message } = this.state;
    let { maxLength } = this.props;

    return (
      <div className={styles["container"]}>
        <input
          type="text"
          name={field}
          className={styles["form-control"]}
          placeholder={placeholder}
          onChange={onChange}
          onKeyUp={this.handleChange.bind(this)}
          maxLength={maxLength}
        />
        <span className={styles["counter"]}>
          {counter < 0 ? message : `${counter} ${message}`}
        </span>
      </div>
    );
  }
}
