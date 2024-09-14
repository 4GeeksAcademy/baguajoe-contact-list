import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

const ContactCard = ({ contact }) => {
  const { store, actions } = useContext(Context);

  const handleDelete = () => {
    actions.deleteContact(contact.id);
  }

  return (
    <div className="contact-card mb-3 border border-success rounded-pill">
      <div className="row w-100 align-items-center">
        <div className="text-center col-md-3 col-sm-5">
          <img className="contact-img rounded-circle img-fluid" src="https://combatbaguazhang.com/images/ChengYouLong.jpg" alt={contact.name} />
        </div>
        <div className="contact-details col-md-9 col-sm-7">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-0">{contact.name}</h3>
            <div className="d-flux align-items-center">
              <Link to={`/editContact/${contact.id}`}>
                <i className="btn fa-solid fa-pencil fa-sm p-0 ms-4"></i>
              </Link>

              <button onClick={handleDelete} className="btn"><i className="fa-solid fa-trash fa-sm"></i></button>

            </div>
          </div>

          <p className="mb-1">{contact.address}</p>
          <p classNAme="mb-1">{contact.email}</p>
          <p className="mb-0">{contact.phone}</p>
        </div>



      </div>
    </div>
  );
};


export default ContactCard;