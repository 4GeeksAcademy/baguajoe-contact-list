import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate, Link } from "react-router-dom";


export const ContactForm = () => {
    const {store, actions}=useContext(Context);
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""

    });
    const { id } = useParams();
    const isEdit = Boolean(id);
    const navigate = useNavigate();

    useEffect(()=>{
        if (isEdit) {
            const contact = store.contacts.find(c => c.id === parseInt(id)); 
            if (contact) {
                setContactData(contact);
            }
        }
    }, [id, isEdit, store.contacts])

    const handleChange = async (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e)=> {
        e.preventDefault();
        // try {
        //     if (isEdit) {
        //         await actions.editContact(id, contactData);
        //     } else {
        //         await actions.addContact(contactData);
        //     }
        //     await actions.getContacts();
            navigate("/");
        // } catch (error) {
        //     console.error(isEdit ?"error updating contacts" :"error adding contact", error);
        // }
    }

    return (
        <div className="container">
            <h1 className="text-center mt-3">
                {isEdit ? "Update Contact" : "Add A New Contact"}
            </h1>
            <form className="contact-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="enter your name"
                        value={contactData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* [TODO copy lines 28-41, do for email, phone, address] */}
                <button type="submit "className="btn btn-primary form-control mt-3">
                    {
                        isEdit?"Update Contact" : "save"
                    }
                </button>
            </form>
            <Link to="/">or get back to contacts</Link>
        </div>
    )
}