import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.lenght === 0 || secret.lenght === 0) return;

    axios.put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-key": "e22417a1-76cf-452c-b0b9-85a2f619234f" } }
      )
      .then((r) => router.push("/chats"));
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Enter your E-mail"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Enter your Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
