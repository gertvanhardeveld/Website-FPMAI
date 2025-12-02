import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { searchIndex } from '../utils/searchIndex';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
                setSearchActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [window.location.pathname]);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 0) {
            const results = searchIndex.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.content.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(results);
            setShowResults(true);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
    };

    const handleResultClick = (path) => {
        navigate(path);
        setShowResults(false);
        setSearchQuery('');
    };

    return (
        <header style={{ backgroundColor: 'var(--hu-white)', borderBottom: '1px solid #eee', position: 'relative', zIndex: 1000 }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', height: '80px' }}>
                {/* Logo Section */}
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img src={`${import.meta.env.BASE_URL}hu-logo.png`} alt="Hogeschool Utrecht" style={{ height: '50px' }} />
                    </Link>
                </div>

                {/* Navigation Section */}
                <nav style={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: '40px' }}>
                    <button
                        className="hamburger-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        ☰
                    </button>
                    <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        <li><NavLink to="/voor-wie" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Voor wie</NavLink></li>
                        <li><NavLink to="/programma" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Programma</NavLink></li>
                        <li><NavLink to="/beoordeling" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Beoordeling</NavLink></li>
                        <li><NavLink to="/leeruitkomsten" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Leeruitkomsten</NavLink></li>
                        <li><NavLink to="/praktisch" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Praktisch</NavLink></li>
                        <li><NavLink to="/producten" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Producten</NavLink></li>
                        <li><NavLink to="/team" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Team</NavLink></li>
                    </ul>

                    {/* Search Section */}
                    <div style={{ display: 'flex', gap: '15px', position: 'relative', marginLeft: 'auto' }} ref={searchRef}>
                        {!searchActive ? (
                            <button
                                onClick={() => setSearchActive(true)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '20px',
                                    padding: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    transition: 'background-color 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                aria-label="Zoeken"
                            >
                                🔍
                            </button>
                        ) : (
                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '20px', padding: '5px 15px' }}>
                                <span style={{ fontSize: '16px', marginRight: '5px' }}>🔍</span>
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Zoeken..."
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    onFocus={() => searchQuery.length > 0 && setShowResults(true)}
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        outline: 'none',
                                        fontSize: '14px',
                                        width: '150px',
                                        color: '#333'
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        setSearchActive(false);
                                        setSearchQuery('');
                                        setShowResults(false);
                                    }}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '18px',
                                        color: '#999',
                                        marginLeft: '5px',
                                        padding: '0 5px'
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                        )}

                        {/* Search Results Dropdown */}
                        {showResults && searchActive && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                right: 0,
                                width: '300px',
                                backgroundColor: 'white',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                borderRadius: '8px',
                                marginTop: '10px',
                                overflow: 'hidden',
                                border: '1px solid #eee'
                            }}>
                                {searchResults.length > 0 ? (
                                    searchResults.map((result, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleResultClick(result.path)}
                                            style={{
                                                padding: '12px 15px',
                                                borderBottom: index < searchResults.length - 1 ? '1px solid #eee' : 'none',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.2s'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                        >
                                            <div style={{ fontWeight: 'bold', fontSize: '14px', color: 'var(--hu-blue)' }}>{result.title}</div>
                                            <div style={{ fontSize: '12px', color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                {result.content}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div style={{ padding: '15px', textAlign: 'center', color: '#999', fontSize: '14px' }}>
                                        Geen resultaten gevonden
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </nav>
            </div>
            <style>{`
        .nav-link {
          color: var(--hu-grey);
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          padding-bottom: 5px;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s, color 0.3s;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--hu-blue);
          border-bottom-color: var(--hu-blue);
        }
        
        .hamburger-btn {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--hu-grey);
            padding: 5px;
        }

        .nav-links {
            display: flex;
            gap: 30px;
            align-items: center;
            margin: 0;
            list-style: none;
        }

        @media (max-width: 960px) {
            .hamburger-btn {
                display: block;
            }
            
            .nav-links {
                display: none;
                position: absolute;
                top: 80px;
                left: 0;
                width: 100%;
                background-color: var(--hu-white);
                flex-direction: column;
                padding: 20px 0;
                border-bottom: 1px solid #eee;
                box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                gap: 0;
            }
            
            .nav-links.open {
                display: flex;
            }
            
            .nav-links li {
                width: 100%;
                text-align: center;
            }
            
            .nav-links li a {
                display: block;
                padding: 15px 0;
                width: 100%;
            }
        }
      `}</style>
        </header>
    );
};

export default Header;
