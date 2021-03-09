import React, { Component } from 'react';

class Button extends Component {
  state = {
    text: 'button',
    classes: '',
  };

  componentDidMount() {
    let { text, classes } = this.state;
    text = this.props.text;
    classes = this.props.classes;

    this.setState({ text, classes });
  }

  render() {
    const { onClick } = this.props;

    return (
      <button className={this.state.classes} onClick={onClick}>
        {this.state.text}
      </button>
    );
  }
}

export default Button;
