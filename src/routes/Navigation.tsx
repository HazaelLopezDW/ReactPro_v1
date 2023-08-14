import {
    BrowserRouter,
    NavLink,
    Navigate,
    Route,
    Routes
} from 'react-router-dom';
import logo from '../logo.svg';
import { Suspense } from 'react';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';



export const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt='react logo' />
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={
                                        ({ isActive }) => isActive ? 'nav-active' : ''
                                    }
                                >
                                    Shopping
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className={
                                        ({ isActive }) => isActive ? 'nav-active' : ''
                                    }
                                >
                                    User
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className={
                                        ({ isActive }) => isActive ? 'nav-active' : ''
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<ShoppingPage />} />
                        <Route path="/about" element={<h1>About page</h1>} />
                        <Route path="/user" element={<h1>User page</h1>} />

                        <Route path='/*' element={<Navigate to="/home" replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
