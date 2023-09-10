import ActionProvider from "@/bot/ActionProvider";
import MessageParser from "@/bot/MessageParser";
import config from "@/bot/config";
import React from "react";
import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { BsFillChatDotsFill } from "react-icons/Bs";

const ChatBot = () => {
  // State to track chat visibility
  const [chatVisible, setChatVisible] = useState(false);

  // Function to toggle chat visibility
  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <div className="fixed bottom-12 right-5 flex flex-col-reverse items-end">
      {/* Chat icon that toggles visibility */}
      <div
        className="bg-brown-0 w-fit py-2 px-5 rounded-full flex justify-center items-center select-none"
        onClick={toggleChat}
      >
        {/* <img src="chat-icon.png" alt="Chat" /> */}
        <BsFillChatDotsFill className="text-white text-2xl" />
        <span className="text-white text-xl pl-2">Chat</span>
      </div>

      {/* Render ChatBot if chatVisible is true */}
      {chatVisible && (
        <div className="mb-5">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
