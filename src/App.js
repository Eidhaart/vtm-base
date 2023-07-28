// App.js
import React from "react";
import Home from "./pages/Home/Home";
import Camarilla from "./pages/Camarilla/Camarilla";
import Clans from "./pages/Clans/Clans";
import Characters from "./pages/Characters/Characters";
import Rules from "./pages/Rules";
import NoPage from "./pages/NoPage";
import Book from "./pages/Handbook/Book";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import NavBar from "./pages/Navbar/NavBar";
import Admin from "./pages/Admin/Admin";
import Players from "./pages/Characters/Players/Players";
import NPC from "./pages/Characters/NPC/NPC";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/klany" element={<Clans />} />
          <Route path="/camarilla" element={<Camarilla />} />
          <Route path="/postacie" element={<Characters />} />
          <Route path="/zasady" element={<Rules />} />
          <Route path="/podrecznik" element={<Book />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/gracze" element={<Players />} />
          <Route path="/npc" element={<NPC />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
