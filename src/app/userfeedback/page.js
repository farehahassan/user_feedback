"use client";

import Image from "next/image";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

async function addDataToFireStore(username, email, message) {
  try {
    const docRef = await addDoc(collection(db, "Feed-back"), {
      username: username,
      email: email,
      message: message,
    });

    console.log("Documeny written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding doument:  ", error);
    return false;
  }
}
export default function Home() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(username, email, message);
    if (added) {
      setMessage("");
      setEmail("");
      setUsername("");

      alert("Data added to firestore SUCCESSFULLY");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">
      <h1 className="text-5xl md:text-4xl font-sans font-bold m-10">
        User feed-back form:
      </h1>

      <form
        action=""
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            rows={5}
            id="message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >Submit</button>
        </div>
      </form>
    </main>
  );
}
