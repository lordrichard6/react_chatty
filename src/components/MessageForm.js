import { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
  const [value, setvalue] = useState("");
  const { chatId, creds } = props;

  const handleChange = (e) => {
    setvalue(e.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setvalue("");
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
          <span className="image-button">
              <PictureOutlined className="picture-icon" />
          </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload.bind(this)}
      />
      <button className="send-button" type='submit'>
          <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
