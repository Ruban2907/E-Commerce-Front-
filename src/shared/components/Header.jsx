import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
            <nav className="px-8 py-4">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-6">
                        <NavLink to="/contact" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700 transition`}>Contact Us</NavLink>
                        <NavLink to="/about" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700 transition`}>About</NavLink>
                        <NavLink to="/stories" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700 transition`}>Evenworld Stories</NavLink>
                    </div>
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold tracking-widest text-gray-700">EVERLANE</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-white/20 rounded-full" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-white/20 rounded-full" aria-label="Account">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V19.5z" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-white/20 rounded-full" aria-label="Cart">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0A48.108 48.108 0 0112 6.75c2.885 0 5.725.21 8.394.622l.383-1.437A1.125 1.125 0 0020.364 3H21.75M6.75 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}