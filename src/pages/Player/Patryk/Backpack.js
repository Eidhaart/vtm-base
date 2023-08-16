import React, { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  deleteDoc,
  getFirestore,
  collection,
  updateDoc,
  addDoc
} from "firebase/firestore";
import "./Backpack.css";

const Backpack = ({ userId }) => {
  const db = getFirestore();
  const [items, setItems] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(
    () => {
      const itemsRef = collection(db, "backpack", userId, "items");
      const unsubscribe = onSnapshot(itemsRef, snapshot => {
        setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });

      return () => unsubscribe();
    },
    [userId, db]
  );

  const handleDelete = async itemId => {
    const itemRef = doc(db, "backpack", userId, "items", itemId);
    await deleteDoc(itemRef);
  };

  const handleEditName = async (itemId, newName) => {
    if (newName && newName.trim() !== "") {
      const itemRef = doc(db, "backpack", userId, "items", itemId);
      await updateDoc(itemRef, { name: newName });
    }
  };

  const handleEditCount = async (itemId, change) => {
    const currentItem = items.find(item => item.id === itemId);
    const newCount = currentItem.count + change;

    if (newCount >= 0) {
      const itemRef = doc(db, "backpack", userId, "items", itemId);
      await updateDoc(itemRef, { count: newCount });
    }
  };

  const handleAdd = async () => {
    const newName = prompt("Nazwa przedmiotu:");
    const count = parseInt(prompt("Ilość:"), 10);

    if (newName && newName.trim() !== "" && count > 0) {
      const itemsRef = collection(db, "backpack", userId, "items");
      await addDoc(itemsRef, { name: newName, count });
    }
  };

  return (
    <div className="backpack-container">
      <div className="backpack-header">Plecak</div>
      <button
        className="backpack-button edit-mode-button"
        onClick={() => setEditMode(!editMode)}
      >
        {editMode ? "Gotowe" : "Edytuj"}
      </button>
      {editMode &&
        <button className="backpack-button add-item-button" onClick={handleAdd}>
          Dodaj przedmiot
        </button>}
      <div className="item-container">
        {items.map(item =>
          <div key={item.id} className="backpack-item">
            <span>
              {item.name} ({item.count})
            </span>
            {editMode &&
              <div className="backpack-button-container">
                <button
                  className="backpack-button"
                  onClick={() => handleEditName(item.id, prompt("Nowa nazwa:"))}
                >
                  Rename
                </button>
                <button
                  className="backpack-button"
                  onClick={() => handleEditCount(item.id, -1)}
                >
                  -
                </button>
                <button
                  className="backpack-button"
                  onClick={() => handleEditCount(item.id, 1)}
                >
                  +
                </button>
                <button
                  className="backpack-button"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Backpack;
