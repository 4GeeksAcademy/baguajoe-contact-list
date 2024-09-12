import React, {useState, useContext} from 'react';
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

const ContactCard = ({ contact }) => {
  const {store, actions} = useContext(Context);

  const handleDelete = () => {
    actions.deleteContact(contact.id);
  }

    return (
      <div className="contact-container">
          <div className="contact-card">
            <div className="contact-image">
              <img src="https://combatbaguazhang.com/images/ChengYouLong.jpg" alt={contact.name} />
            </div>
            <div className="contact-details">
              <h3>{contact.name}</h3>
              <p>{contact.address}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </div>

            <div className="contact-btn-group">
              <Link to={`/editContact/${contact.id}`}>
                <i className="btn fa-solid fa-pencil"></i>
              </Link> 
              
              <button onClick={handleDelete} className="btn"><i className="fa-solid fa-trash"></i></button>
            </div>

          </div>
      </div>
    );
  };
  

export default ContactCard;