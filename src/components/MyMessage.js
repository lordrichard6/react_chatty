import { getMessages } from "react-chat-engine";

const MyMessage = ({ message }) => {
  if (message.attachments.length && message.attachments > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachments"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#a07f54",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
