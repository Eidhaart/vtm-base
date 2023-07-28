import React, {useState} from 'react'
import "./Modal.css"

function Modal( props ) {

    const[modal,setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

  return (
    <>
        <button className='btn-modal' onClick={toggleModal}> więcej</button>

        
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2></h2>
            
              {props.desc}
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal