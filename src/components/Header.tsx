import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner">
                    <h1>To-Do</h1>
                    <div className="header__socials">
                        <p>Repository link and my profile:</p>
                        <img src="./github.png" alt="" className='header__img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header