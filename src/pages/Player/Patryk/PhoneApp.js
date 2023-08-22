import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDocs
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
  const [unreadSenders, setUnreadSenders] = useState(new Set());
  const availableUserIds = [
    "walerian",
    "sebastian",
    "godrick",
    "bartek",
    "mary"
  ]; // Example user IDs
  const initialSenders = JSON.parse(localStorage.getItem("senders")) || [
    "Astrid",
    "Henrik",
    "Isabella",
    "Loke"
  ];
  const [availableSenders, setAvailableSenders] = useState(() => {
    const savedSenders = localStorage.getItem("senders");
    return savedSenders
      ? JSON.parse(savedSenders)
      : ["Astrid", "Henrik", "Isabella", "Loke"];
  });

  const [newSenderName, setNewSenderName] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  const [isEditMode, setEditMode] = useState(false);

  useEffect(
    () => {
      console.log("In PhoneApp useEffect - userId:", userId);

      const activeUserId = userId === "admin" ? adminUserId : userId;
      if (!activeUserId) return;

      // Adjusting the collection reference based on the user's status
      const messagesRef =
        userId === "admin"
          ? collection(db, `messages-${adminUserId}`)
          : collection(db, `messages-${userId}`);

      const sendersRef = doc(db, "senders", activeUserId);

      const q = query(messagesRef, where("userId", "==", activeUserId));

      // Listen for changes in the messages
      const unsubscribeMessages = onSnapshot(q, snapshot => {
        let fetchedSenders = new Set();
        let fetchedMessages = [];
        setUnreadSenders(new Set());

        snapshot.docs.forEach(doc => {
          const data = doc.data();
          fetchedSenders.add(data.sender);
          if (!data.read) {
            setUnreadSenders(prev => new Set([...prev, data.sender]));
          }
          if (currentSender === "" || currentSender === data.sender) {
            fetchedMessages.push({
              id: doc.id,
              ...data
            });

            setSenders([...fetchedSenders]);
            setMessages(fetchedMessages);
          }

          console.log("activeUserId:", activeUserId);
          console.log("adminUserId:", adminUserId);
          console.log("adminSender:", adminSender);
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

      // Listen for changes in the availableSenders list in Firestore
      const unsubscribeSenders = onSnapshot(sendersRef, snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setAvailableSenders(data.senderList);
        } else {
          // You can set a default list if there's no data for the user
          setAvailableSenders(["Astrid", "Henrik", "Isabella"]);
        }
      });

      return () => {
        unsubscribeMessages();
        unsubscribeSenders();
      };
    },
    [userId, currentSender, adminUserId, adminSender]
  );

  const handleSenderSelect = async sender => {
    setCurrentSender(sender);
    setMenuOpen(false);

    // Mark all messages from the selected sender as read
    const targetUserId = userId === "admin" ? adminUserId : userId;
    const messagesRef = collection(db, `messages-${targetUserId}`);
    const q = query(
      messagesRef,
      where("sender", "==", sender),
      where("read", "==", false)
    );

    const unreadMessagesSnapshot = await getDocs(q);
    unreadMessagesSnapshot.forEach(doc => {
      updateDoc(doc.ref, { read: true });
    });
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
        return null; // if you have a default image
    }
  }

  console.log(messages.sender);

  const handleSendMessage = async event => {
    event.preventDefault();

    if (userInput.trim() === "") return;

    const targetUserId = userId === "admin" ? adminUserId : userId;
    const targetSender = userId === "admin" ? adminSender : currentSender;

    const messagesRef = collection(db, `messages-${targetUserId}`);

    await addDoc(messagesRef, {
      userId: userId == "admin" ? adminUserId : targetUserId,
      sender: targetSender,
      text: userInput,
      me: userId !== "admin",
      timestamp: serverTimestamp(),
      read: true // default to false
    });

    const lowerCaseSender = targetSender.toLowerCase();
    function Capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (availableUserIds.includes(lowerCaseSender)) {
      const additionalMessagesRef = collection(
        db,
        `messages-${lowerCaseSender}`
      );
      await addDoc(additionalMessagesRef, {
        userId: lowerCaseSender,
        sender: Capitalize(targetUserId), // the original user becomes the sender in this context
        text: userInput,
        me: false, // since it's from another user
        timestamp: serverTimestamp(),
        read: false // default to false
      });
    }

    setUserInput("");
  };

  const current = new Date();

  const time = current.toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const [selectedUserId, setSelectedUserId] = useState(userId); // State to manage selected userId when in admin mode

  const addSender = async newSender => {
    setAvailableSenders(prevSenders => {
      const updatedSenders = [...prevSenders, newSender];

      // Save to Firestore
      const sendersRef = doc(db, "senders", userId);
      updateDoc(sendersRef, {
        senderList: updatedSenders
      });

      return updatedSenders;
    });
  };

  // When removing a sender:
  const removeSender = async senderToRemove => {
    setAvailableSenders(prevSenders => {
      const updatedSenders = prevSenders.filter(
        sender => sender !== senderToRemove
      );

      // Save to Firestore
      const sendersRef = doc(db, "senders", userId);
      updateDoc(sendersRef, {
        senderList: updatedSenders
      });

      return updatedSenders;
    });
  };

  function getSenderImage(senderName) {
    try {
      return require(`./images/${senderName}.jpg`);
    } catch (error) {
      return require("./images/placeholder.jpg");
    }
  }

  return (
    <div className="phone-app-container">
      <div className="upper-bar-container">
        <div className="bar-time">
          {time}
        </div>
        <div className="bar-time">
          {unreadSenders.size > 0 &&
            <div className="unread-notice">
              Nieodczytane wiad. {unreadSenders.size} ({" "}
              {Array.from(unreadSenders).join(", ")} )
            </div>}
        </div>

        <div className="bar-symbols">
          <div className="">
            <img
              className="upper-bar-symbol"
              src={require("./images/wifi.png")}
            />
          </div>
          <div>
            <img
              className="upper-bar-symbol"
              src={require("./images/signal.png")}
            />
          </div>
          <div>
            <img
              className="upper-bar-symbol"
              src={require("./images/battery.png")}
            />
          </div>
        </div>
      </div>

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
              alt="x"
              className="profile-pic"
              onerror="this.onerror=null; this.src={require('./images/placeholder.jpg')};"
            />

            {currentSender}
          </div>

          {menuOpen &&
            <div className="sender-menu">
              <div className="sender-menu-header">Kontakty</div>
              <ul className="sender-list">
                {availableSenders.map(sender =>
                  <li
                    key={sender}
                    onClick={
                      isEditMode ? null : () => handleSenderSelect(sender)
                    }
                    style={
                      unreadSenders.has(sender)
                        ? { backgroundColor: "orange" }
                        : {}
                    }
                  >
                    {isEditMode &&
                      <span
                        onClick={e => {
                          e.stopPropagation(); // Prevent li's click event from triggering
                          removeSender(sender);
                        }}
                      >
                        -
                      </span>}
                    <img
                      src={getSenderImage(sender)}
                      alt="x"
                      className="profile-pic"
                      onerror="this.onerror=null; this.src={require('./images/placeholder.jpg')};"
                    />

                    {sender}
                  </li>
                )}
                <li
                  className={!isInputVisible ? "add-btn" : "add-btn-close"}
                  onClick={() => setInputVisible(!isInputVisible)}
                >
                  {!isInputVisible ? "+ Dodaj kontakt" : "- Dodaj kontakt"}
                </li>
                {isInputVisible &&
                  <div className="add-input-container">
                    <input
                      className="add-input"
                      type="text"
                      value={newSenderName}
                      onChange={e => setNewSenderName(e.target.value)}
                      placeholder="Enter Sender Name"
                    />
                    <button
                      className="add-input-button"
                      onClick={() => addSender(newSenderName)}
                    >
                      +
                    </button>
                  </div>}
              </ul>

              <li>
                <button
                  className="edit-btn"
                  onClick={() => setEditMode(!isEditMode)}
                >
                  {isEditMode ? "Done" : "Edit"}
                </button>
              </li>
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

        <div className="symbol-container">
          <div className="symbol">🔲</div>
          <div className="symbol">◯</div>
          <div className="symbol">▷</div>
        </div>
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
    </div>
  );
};

export default PhoneApp;
