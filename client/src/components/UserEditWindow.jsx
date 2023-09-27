import React from 'react';
import {useEffect, useState} from 'react';
import {BiSolidPencil} from 'react-icons/bi';

function UserEditWindow({user, userInfo, setUserInfo, field, changeVisibilityEditor, updateUserInfo}) {
    const [firstName, setFirstName] = useState(userInfo.firstName);
    const [lastName, setLastName] = useState(userInfo.lastName);
    const [phone, setPhone] = useState(userInfo.phone);
    const [email, setEmail] = useState(userInfo.email);
    const [street, setStreet] = useState(userInfo.street);
    const [apartment, setApartment] = useState(userInfo.apartment);
    const [city, setCity] = useState(userInfo.city);
    const [zip, setZip] = useState(userInfo.zip);
    const [country, setCountry] = useState(userInfo.country);
    const [loading, setLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        updateUserInfo(firstName, lastName, phone, email, street, apartment, city, zip, country);
    };

    return (
        <div className="user-editor-display">
            <form className="user-editor-container" onSubmit={onSubmit}>
                <div className="user-editor-close-btn" onClick={changeVisibilityEditor}>x</div>
                {field === 'field1' ? ( <>
                    <h1 className="title">Personal Information</h1>
                    <div className="column-edit-fields">   
                        <input type="text" placeholder="First Name" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                        <input type="text" placeholder="Last Name" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>    
                    </div>  
                    <input type="text" placeholder="Phone Number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                    <input type="text" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>   
                    </>
                ): (<>
                    <h1 className="title">Billing/Shipping Address</h1>
                    <div className="column-edit-fields">
                        <input type="text" placeholder="Apartment Number" value={apartment} onChange={(e) => setApartment(e.target.value)} required/>
                        <input type="text" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} required/>
                    </div>
                    <div className="column-edit-fields">
                        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required/>
                        <input type="text" placeholder="Zip code" value ={zip} onChange={(e) => setZip(e.target.value)} required/>
                    </div>
                    <div className="column-edit-fields">
                        <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required/>
                    </div>
                    </>
                )}
                <button type="submit" value="Submit" className="information-update-btn">Update Information</button>
            </form>
        </div>
    )
}

export default UserEditWindow;