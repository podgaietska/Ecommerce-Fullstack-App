import React from "react";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";

function UserProfile({user}) {
    const [userInfo, setUserInfo] = useState();
    const [userExists, setUserExists] = useState(localStorage.user ? JSON.parse(localStorage.user) : null);

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
                        <button className="btn">EDIT</button>
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
                        <button className="btn">EDIT</button>
                </div>
            
            </div>
            <Footer />
        </div>)
        : (<div></div>)}
        </>
    );
}

export default UserProfile;