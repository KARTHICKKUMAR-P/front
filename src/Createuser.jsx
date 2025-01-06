import React, { useState } from 'react'
import axios from 'axios'

export default function Createuser({ onUserCreated }) {
    const [name, setName] = useState('')
    const [email, setAge] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, email, address }
        console.log("Submitting user:", user) 
        axios.post("http://localhost:3300/api/create", user) // Ensure the endpoint is correct
            .then((res) => {
                console.log("Response from server:", res.data)
                onUserCreated() // Notify parent component to re-fetch data
            })
            .catch((error) => {
                console.error("There was an error creating the user!", error)
            })
    }

    return (
        <div>
            <h1>Createuser</h1>
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>age</label>
                <input type="text" value={email} onChange={(e) => setAge(e.target.value)} />
                <label>address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}