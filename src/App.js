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
          <Route path="/zasady" element={<Rules />} />
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
