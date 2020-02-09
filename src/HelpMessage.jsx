import React, { Component } from "react";

class HelpMessage extends Component {
  componentDidMount() {
    const { previousStep } = this.props;
    this.props.triggerNextStep({ trigger: previousStep.id });
  }

  render() {
    return <div>Help Message</div>;
  }
}

export default HelpMessage;
