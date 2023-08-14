import {
         BrowserRouter,
         NavLink,
         Navigate,
         Route,
         Routes } from 'react-router-dom';
import logo from '../logo.svg';
import { Suspense } from 'react';



export const Navigation = () => {
    return (
        <>
            <Suspense fallback={<span>Loading...</span>}>
                <BrowserRouter>
                    <div className='main-layout'>
                        <nav>
                            <img src={logo} alt='react logo' />
                            <ul>
                                <li>
                                    <NavLink 
                                        to="/" 
                                        className={
                                            ({isActive}) => isActive ? 'nav-active': ''
                                            }
                                    >     
                                    Home   
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/" 
                                        className={
                                            ({isActive}) => isActive ? 'nav-active': ''
                                            }
                                    >     
                                    User   
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/" 
                                        className={
                                            ({isActive}) => isActive ? 'nav-active': ''
                                            }
                                    >   
                                    About     
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="about" element={<h1>About page</h1>}/>
                            <Route path="user"  element={<h1>User page</h1>}/>
                            <Route path="home"  element={<h1>Home page</h1>}/>

                            <Route path='/*' element={<Navigate to="/home" replace />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </Suspense>
        </>
    )
}
