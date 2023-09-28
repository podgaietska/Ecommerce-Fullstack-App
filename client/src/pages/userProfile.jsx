import React from "react";
import {useEffect, useState} from "react";
import UserEditWindow from "../components/UserEditWindow";

function UserProfile({user}) {
    const [userInfo, setUserInfo] = useState();
    const [userExists, setUserExists] = useState(localStorage.user ? JSON.parse(localStorage.user) : null);
    const [showEditor, setShowEditor] = useState(false);
    const [field, setField] = useState('field1');

    useEffect(() => {
        try{
            const fetchUserInfo = async () => {
                console.log('fetching user info')
                const res = await fetch(`api/users/${user.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    },
                });
                if(!res.ok){
                    throw new Error(`An error occured: ${res.status}`);
                }
                const data = await res.json();
                setUserInfo(data);
            }

            if(user){
                fetchUserInfo();
            }

        }catch(error){
            console.log(error);
        } 
    }, [user]);

    const changeVisibilityEditor = (e) => {
        setShowEditor((prevState) => !prevState);
        setField(e.target.value);
    };

    const updateUserInfo = async(firstName, lastName, phone, email, street, apartment, city, zip, country) => {
        try {
            const updatedUser = {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                street: street,
                apartment: apartment,
                city: city,
                zip: zip,
                country: country,
            };
            const res = await fetch(`/api/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(updatedUser),
            });

            if(!res.ok){
                throw new Error(`An error occured: ${res.status}`);
            }
            const data = await res.json();
            setUserInfo(data);
        } catch (error) {
            console.log(error);
        } finally {
            setShowEditor(false);
        }
    };

    return ( 
        <>
        {(userInfo) ?
        (<div>
            <div className="page-header">
                <div>
                    <h2>.my_account</h2>
                </div>
            </div>
            <div className="user-profile">
                <div className="user-details">
                    <span>PERSONAL INFORMATION</span>
                        <h3>{userInfo.firstName} {userInfo.lastName}</h3>
                        <p>{userInfo.phone}</p>
                        <p>{userInfo.email}</p>
                        <button className="btn" onClick={changeVisibilityEditor} value="field1">EDIT</button>
                </div>
                <div className="separator"></div>
                <div className="address-container">
                        <span>BILLING/SHIPPING ADDRESS</span>
                        <div className="user-address">
                        <p>{userInfo.firstName} {userInfo.lastName}</p>
                        <p>{userInfo.street}, {userInfo.apartment}</p>
                        <p>{userInfo.city}</p>
                        <p>{userInfo.zip}</p>
                        <p>{userInfo.country}</p>
                        </div>
                        <button className="btn" onClick={changeVisibilityEditor} value="field2">EDIT</button>
                </div>
            
            </div>
        </div>)
        : (<div></div>)}
        {showEditor && <UserEditWindow user={user} userInfo={userInfo} setUserInfo={setUserInfo} field={field} changeVisibilityEditor={changeVisibilityEditor} updateUserInfo={updateUserInfo}/>}
        </>
    );
}

export default UserProfile;