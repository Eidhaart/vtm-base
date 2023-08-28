import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import NotesApp from "./Patryk/NotesApp";
import RenderApp from "./Patryk/RenderApp";
import "./Player.css";
import PhoneApp from "./Patryk/PhoneApp";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import Walerian from "./Knowledge/Walerian/Walerian";
import Godrick from "./Knowledge/Godrick/Godrick";
import Sebastian from "./Knowledge/Sebastian/Sebastian";
import Mary from "./Knowledge/Mary/Mary";
import Allan from "./Knowledge/Allan/Allan";
import Backpack from "./Patryk/Backpack";
import backPack from "./Patryk/images/backpack.png";
import Ludvig from "./Knowledge/Ludvig/Ludvig";
import {
  query,
  where,
  getDocs,
  collection,
  onSnapshot
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import cellPhone from "./Patryk/images/cell-phone.png";

function Player() {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);

  const handleClearUserId = () => {
    localStorage.removeItem("userId");
    setUserId("");
  };

  const firebaseConfig = {
    apiKey: "AIzaSyAPYDmRtz_XsV6Y3YQzHJo-IWiZtEZ3kaM",
    authDomain: "vtmapp-77b0b.firebaseapp.com",
    projectId: "vtmapp-77b0b",
    storageBucket: "vtmapp-77b0b.appspot.com",
    messagingSenderId: "345873452144",
    appId: "1:345873452144:web:52f2ad1c9e95fdb96fb8b5",
    measurementId: "G-DWRE89XTZD"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  function CharPage({ userId }) {
    switch (userId) {
      case "walerian":
        return <Walerian />;
      case "sebastian":
        return <Sebastian />;
      case "godrick":
        return <Godrick />;
      case "mary":
        return <Mary />;
      case "ludvig":
        return <Ludvig />;
      default:
        return null;
    }
  }

  // On component mount, if no userId is in localStorage, prompt the user for it.

  useEffect(
    () => {
      if (!userId) {
        const promptedUserId = prompt("Please enter your User ID:");
        if (promptedUserId) {
          localStorage.setItem("userId", promptedUserId);
          setUserId(promptedUserId);
        }
      }

      if (userId) {
        const fetchUnreadMessages = async () => {
          const messagesRef = collection(db, `messages-${userId}`);
          const q = query(
            messagesRef,
            where("userId", "==", userId),
            where("read", "==", false)
          );
          const unsubscribe = onSnapshot(q, snapshot => {
            setHasUnreadMessages(!snapshot.empty);
          });

          console.log("messages: " + q);

          const querySnapshot = await getDocs(q);
          console.log("Query snapshot:", querySnapshot);
          if (querySnapshot.docs.length > 0) {
            setHasUnreadMessages(true);
            console.log("unread messages");
          } else {
            setHasUnreadMessages(false);
            console.log("read messages");
          }
        };

        fetchUnreadMessages();
      }
    },
    [userId]
  );

  function SampleComponent() {
    return <PhoneApp key={userId} userId={userId} />;
  }

  console.log("In Player - userId:", userId);

  return (
    <div className="player-container">
      <span className="character-name">
        {userId}
      </span>

      <div className="row-menu">
        <div className="column">
          <ModalWrapper
            className="modal-wrapper-cont"
            Component={Backpack}
            button={backPack}
            userId={userId}
          />
        </div>
        <div className="column">
          <ModalWrapper
            className={`modal-wrapper-cont ${hasUnreadMessages
              ? "unread-messages"
              : ""}`}
            Component={SampleComponent}
            button={cellPhone}
            unread={hasUnreadMessages}
          />
        </div>

        {/* Add more columns/items as needed */}
      </div>

      <div className="player-apps">
        <CharPage userId={userId} />
      </div>

      <button className="clear-id" onClick={handleClearUserId}>
        Clear User ID
      </button>
    </div>
  );
}

export default Player;
