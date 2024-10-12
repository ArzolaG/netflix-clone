import React from "react";
import { users } from "../types/users";
import "../styles/user.css";

const UserSelection = () => {
    return (
        <div className="modal">
            <div className="container">
                <h1>Who's watching?</h1>
                <div className="profile-container">
                    {users.map((user, index) => {
                        return (
                            <div className="profile" key={index}>
                                <div className="image-wrapper">
                                    <img src={user.profile_icon} alt="Profile Icon" />
                                </div>
                                <span className="name">{user.name}</span>
                            </div>
                        );
                    })}
                </div>
                <button className="btn">Manage profiles</button>
            </div>
        </div>
    );
};

export default UserSelection;
