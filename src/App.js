import React from "react";
import { ThemeProvider } from "styled-components";
import Repos1 from "./Repos1";
import Help from "./Help";
import HelpMessage from "./HelpMessage";
import Repos2 from "./Repos2";
import UserForm from "./UserForm";

import ChatBot from "react-simple-chatbot";

const otherFontTheme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#6e48aa",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#6E48AA",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

const steps = [
  {
    id: "1",
    message:
      "Hi, This is File Services Bot.Tack File Transmission Status by Following options",
    trigger: "2"
  },
  {
    id: "2",
    options: [
      { value: 1, label: "By Tracking Id", trigger: "trackingId" },
      { value: 2, label: "By UserName", trigger: "userName" },
      { value: 3, label: "By FileName", trigger: "3" }
    ],
    placeholder: "Select one of the option"
  },
  {
    id: "3",
    message: ({ previousValue, steps }) => "Hello",
    trigger: ({ value, steps }) => "2"
  },

  {
    id: "trackingId",
    user: true,
    trigger: "5",
    placeholder: "Enter Tracking Id"
  },
  {
    id: "userName",
    component: <UserForm />,
    //trigger: "7",
    placeholder: "Enter UserName",
    waitAction: true,
    replace: true,
    trigger: "7"
  },

  {
    id: "5",
    component: <Repos1 />,
    trigger: "6"
  },
  {
    id: "7",
    component: <Repos2 />,
    trigger: "6"
  },
  {
    id: "6",
    user: true,
    placeholder: "Type Any Thing to greet Bot",
    //replace: true,
    trigger: "1"
  }
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot steps={steps} width="600px" />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
