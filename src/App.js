import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="42b614e7-cb20-43f9-96af-eceeec55a70d"
      userName="l0rdR1chard"
      userSecret="123123"
      // userName="JohnDoe"
      // userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
