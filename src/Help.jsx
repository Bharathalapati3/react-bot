import React, { Component } from "react";

class Help extends Component {
  componentWillMount() {
    const { previousStep } = this.props;
    const { metadata = {} } = previousStep;
    const trigger =
      previousStep.value === "help" ? "help-message" : metadata.triggerNext;

    this.props.triggerNextStep({ trigger });
  }

  render() {
    return null;
  }
}

export default Help;
