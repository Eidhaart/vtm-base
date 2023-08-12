import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import "./PhoneApp.css";
import Astrid from "./images/Astrid.jpg";
import Henrik from "./images/Henrik.jpg";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPYDmRtz_XsV6Y3YQzHJo-IWiZtEZ3kaM",
  authDomain: "vtmapp-77b0b.firebaseapp.com",
  projectId: "vtmapp-77b0b",
  storageBucket: "vtmapp-77b0b.appspot.com",
  messagingSenderId: "345873452144",
  appId: "1:345873452144:web:52f2ad1c9e95fdb96fb8b5",
  measurementId: "G-DWRE89XTZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PhoneApp = ({ userId = "" }) => {
  const [messages, setMessages] = useState([]);
  const [senders, setSenders] = useState([]);
  const [currentSender, setCurrentSender] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [userInput, setUserInput] = useState(""); // new state for user input
  const [adminUserId, setAdminUserId] = useState("");
  const [adminSender, setAdminSender] = useState("");
  const availableUserIds = [
    "walerian",
    "sebastian",
    "godrick",
    "allan",
    "mary"
  ]; // Example user IDs
  const availableSenders = ["Astrid", "Henrik"]; // Example senders

  useEffect(
    () => {
      console.log("In PhoneApp useEffect - userId:", userId);

      const activeUserId = userId === "admin" ? adminUserId : userId;
      if (!activeUserId) return;

      const messagesRef = collection(db, `messages-${userId}`);

      const q = query(messagesRef, where("userId", "==", activeUserId));

      const unsubscribe = onSnapshot(q, snapshot => {
        let fetchedSenders = new Set();
        let fetchedMessages = [];

        // Existing code
        snapshot.docs.forEach(doc => {
          const data = doc.data();
          fetchedSenders.add(data.sender);
          if (currentSender === "" || currentSender === data.sender) {
            fetchedMessages.push({
              id: doc.id,
              ...data
            });
          }
        });

        fetchedMessages.sort((a, b) => {
          return (
            (a.timestamp ? a.timestamp.seconds : 0) -
            (b.timestamp ? b.timestamp.seconds : 0)
          );
        });

        if (currentSender === "" && fetchedMessages.length > 0) {
          setCurrentSender(fetchedMessages[0].sender);
        }

        setSenders([...fetchedSenders]);
        setMessages(fetchedMessages);
      });

      return () => unsubscribe();
    },
    [userId, currentSender, adminUserId]
  );

  const handleSenderSelect = sender => {
    setCurrentSender(sender);
    setMenuOpen(false);
  };

  const handleInputChange = event => {
    setUserInput(event.target.value);
  };

  function getSenderImage(senderName) {
    switch (senderName) {
      case "Astrid":
        return Astrid;
      case "Henrik":
        return Henrik;
      // ... other cases
      default:
        return Astrid; // if you have a default image
    }
  }

  console.log(messages.sender);

  const handleSendMessage = async event => {
    event.preventDefault();

    if (userInput.trim() === "") return;

    const messagesRef = collection(db, "messages");

    const targetUserId = userId === "admin" ? adminUserId : userId;
    const targetSender = userId === "admin" ? adminSender : currentSender;

    await addDoc(messagesRef, {
      userId: targetUserId,
      sender: targetSender,
      text: userInput,
      me: userId !== "admin", // set 'me' to false if logged in as admin
      timestamp: serverTimestamp()
    });

    setUserInput("");
  };

  return (
    <div className="message-container-relative">
      <div className="message-container">
        {menuOpen &&
          <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}

        <div className="message-header">
          <span
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ≡
          </span>
          <img
            src={getSenderImage(currentSender)}
            alt="User Profile"
            className="profile-pic"
          />{" "}
          {currentSender}
        </div>

        {menuOpen &&
          <div className="sender-menu">
            <div className="sender-menu-header">Kontakty</div>
            <ul className="sender-list">
              {senders.map(sender =>
                <li key={sender} onClick={() => handleSenderSelect(sender)}>
                  <img
                    src={require(`./images/${sender}.jpg`)}
                    alt="User Profile"
                    className="profile-pic"
                  />{" "}
                  {sender}
                </li>
              )}
            </ul>
          </div>}

        <ul className="message-list">
          {messages.map(message =>
            <div className="messages-list-content">
              <li
                key={message.id}
                className={`message-item ${message.me ? "me" : ""}`}
              >
                <div className="message-content">
                  {message.text}
                </div>
              </li>
            </div>
          )}
        </ul>
      </div>
      <form className="send-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          className="blinking-caret"
        />
        <button type="submit">➤</button>
      </form>
      {userId === "admin" &&
        <div className="admin-controls">
          <select
            value={adminUserId}
            onChange={e => setAdminUserId(e.target.value)}
          >
            {availableUserIds.map(id =>
              <option key={id} value={id}>
                {id}
              </option>
            )}
          </select>

          <select
            value={adminSender}
            onChange={e => setAdminSender(e.target.value)}
          >
            {availableSenders.map(sender =>
              <option key={sender} value={sender}>
                {sender}
              </option>
            )}
          </select>
        </div>}
    </div>
  );
};

export default PhoneApp;
