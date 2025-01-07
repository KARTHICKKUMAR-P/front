import Createuser from './Createuser.jsx'
import Updateuser from './Updateuser.jsx'
import Deleteuser from './Deleteuser.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Index() {
    const [user, setUser] = useState([])

    const fetchUsers = () => {
        axios.get("http://localhost:3300/api/fetch") // Ensure the endpoint is correct
            .then((res) => {
                console.log("Fetched users:", res.data)
                setUser(res.data.userdata)
            })
            .catch((error) => {
                console.error("There was an error fetching the users!", error)
            })
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <Router>
                <h1>Hello</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td><button>
                                        <Link to="/update">Update</Link></button>
                                    </td>
                                    <td>
                                        <button>
                                            <Link to="/delete">Delete</Link>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button>
                    <Link to="/create">Create</Link>
                </button>
                <Routes>
                    <Route path="/create" element={<Createuser onUserCreated={fetchUsers} />} />
                    <Route path="/update" element={<Updateuser />} />
                    <Route path="/delete" element={<Deleteuser />} />
                </Routes>
            </Router>
        </>
    )
}
import Createuser from './Createuser.jsx'
import Updateuser from './Updateuser.jsx'
import Deleteuser from './Deleteuser.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Index() {
    const [user, setUser] = useState([])

    const fetchUsers = () => {
        axios.get("http://localhost:3000/api/fetch") // Ensure the endpoint is correct
            .then((res) => {
                console.log("Fetched users:", res.data)
                setUser(res.data)
            })
            .catch((error) => {
                console.error("There was an error fetching the users!", error)
            })
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <Router>
                <h1>Hello</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td><button>
                                        <Link to="/update">Update</Link></button>
                                    </td>
                                    <td>
                                        <button>
                                            <Link to="/delete">Delete</Link>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button>
                    <Link to="/create">Create</Link>
                </button>
                <Routes>
                    <Route path="/create" element={<Createuser onUserCreated={fetchUsers} />} />
                    <Route path="/update" element={<Updateuser />} />
                    <Route path="/delete" element={<Deleteuser />} />
                </Routes>
            </Router>
        </>
    )
}