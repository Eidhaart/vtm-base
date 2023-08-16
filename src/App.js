// App.js
import React from "react";
import Home from "./pages/Home/Home";
import Camarilla from "./pages/Camarilla/Camarilla";

import Characters from "./pages/Characters/Characters";
import Rules from "./pages/Rules";
import NoPage from "./pages/NoPage";
import Book from "./pages/Handbook/Book";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import { Redirect } from "react-router";
import Modal from "./components/Modal/Modal";
import NavBar from "./pages/Navbar/NavBar";
import Admin from "./pages/Admin/Admin";
import Players from "./pages/Characters/Players/Players";
import NPC from "./pages/Characters/NPC/NPC";
import Maps from "./pages/Maps/Maps";
import Navigation from "./pages/Navbar/Navigation";
import Dangers from "./pages/Dangers/Dangers";
import ClansBetter from "./pages/Clans/ClansBetter";
import Player from "./pages/Player/Player";
import Login from "./pages/Player/Login";
import System from "./pages/System/System";
import Glossary from "./pages/System/Glossary/Glossary";
import Concepts from "./pages/System/Concepts/Concepts";
import MakeAVampire from "./pages/System/Creator/MakeAVampire";
import NotesApp from "./pages/Player/Patryk/NotesApp";
import RenderApp from "./pages/Player/Patryk/RenderApp";
import PhoneApp from "./pages/Player/Patryk/PhoneApp";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/klany" element={<ClansBetter />} />
          <Route path="/camarilla" element={<Camarilla />} />
          <Route path="/postacie" element={<Characters />} />
          <Route path="/system" element={<System />} />
          <Route path="system/slowniczek" element={<Glossary />} />{" "}
          <Route path="system/zasady" element={<Concepts />} />{" "}
          <Route path="system/make-a-vampire" element={<MakeAVampire />} />{" "}
          <Route path="gracz/notes" element={<NotesApp />} />{" "}
          <Route path="gracz/ekran" element={<RenderApp />} />{" "}
          <Route path="gracz/wiadomosci" element={<PhoneApp />} />{" "}
          <Route path="/podrecznik" element={<Book />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/gracze" element={<Players />} />
          <Route path="/mapy" element={<Maps />} />
          <Route path="/zagrozenia" element={<Dangers />} />
          <Route path="/npc" element={<NPC />} />
          <Route path="/gracz" element={<Player />} />
          <Route path="/login" element={<Login />} />
          <Route path="vtm-base/" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
