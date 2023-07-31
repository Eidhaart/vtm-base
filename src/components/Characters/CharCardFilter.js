import React from 'react';
import './CharCard.css';  // assuming you have a CSS file named Card.css


const CharCardFilter = ({ character }) => {
    return (
        <div className="char-card">
            <div className="char-card-image">
                <img src={character.imgSrc} alt="character" className="char-main-image" />
                <img src={character.cornerImg} alt="corner" className="char-corner-image" />
            </div>
            <h3>{character.title}</h3>
        </div>
    );
}

export default CharCardFilter;
