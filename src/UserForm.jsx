import React from "react";
import "./UserForm-styles.scss";
import ChatBot from "react-simple-chatbot";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      username: " ",
      startdate: " ",
      enddate: " "
    };
    this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
  }

  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  triggetNext() {
    console.log("TriggerNext");
    console.log("UserName :" + this.state.username);
    console.log("StartDate :" + this.state.startdate);
    console.log("EndDate :" + this.state.enddate);
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep({
        value: [
          { username: this.state.username },
          { startdate: this.state.startdate },
          { enddate: this.state.enddate }
        ],
        trigger: "7"
      });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={() => this.triggetNext()}>
          <p>
            Hello {this.state.username} {this.state.age}
          </p>
          <div>
            Enter user name:{" "}
            <input
              className="text-line"
              type="text"
              name="username"
              onChange={this.myChangeHandler}
            />
          </div>
          <br></br>
          <div>
            Start Date:{" "}
            <input
              type="date"
              name="startdate"
              onChange={this.myChangeHandler}
            />
          </div>
          <br></br>
          <div>
            End Date:{" "}
            <input type="date" name="enddate" onChange={this.myChangeHandler} />
          </div>
          <br></br>
          <div>
            <input type="submit" value="submit" />
            <input type="submit" value="cancel" />
          </div>
        </form>
      </div>
    );
  }
}
export default UserForm;
