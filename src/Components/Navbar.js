import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { DataContext } from '../DataProvider'
import { useAuth, useUser } from 'reactfire'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'




let Navbar = () => {
    const auth = useAuth()

    const { cart } = useContext(DataContext)

    const { status, data: user } = useUser()

    const signin = async () => {
        const provider = new GoogleAuthProvider();
        let u = await signInWithPopup(auth, provider)
    }
    const signout = async () =>{
        let message = await signOut(auth);
        }

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">MARVEL</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav col-md-10">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/cart">Shopping Cart</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>

                </ul>
                <ul className="navbar-nav col-md-2 pl-5 ml-5">

                    {status === 'loading' ?
                        <li className="nav-item active">
                            <p className='nav-link m-0'>Logging In...</p>
                        </li>
                        : user ?
                            <li className="nav-item active">
                                <p className='nav-link m-0'>Welcome {user.displayName}</p>
                                <button className="btn btn-sm btn-info mr-2" onClick={signout}>Sign out</button>
                            </li>
                            :
                            <li className="nav-item active">
                                <button className="btn btn-sm btn-info mr-2" onClick={signin}>Sign-in</button>
                            </li>
                    }

                </ul>
            </div>
        </nav >
    )

}
export default Navbar