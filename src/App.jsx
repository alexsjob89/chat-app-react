import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return <ChatEngine height="100vh" projectID="c9733082-3f75-432d-ae41-6dc2556f313a" userName="Alexandru" userSecret="elisaeve" renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} />;
};

export default App;
