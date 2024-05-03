import React from 'react'
import "./Featured.scss"

function Featured() {
  return (
    <div className='featured'>
        <div className='container'>
            <div className="left">
                <h1>Find the perfect <i>freelance</i> services for your business</h1>
                <div className='search'>
                    <div className='searchInput'>
                        <img src="./images/search.jpeg" alt=""></img>
                        <input type="text" placeholder="Try building mobile app"></input>
                    </div>
                    <button>Search</button>
                </div>
                <div className='popular'>
                    <span>Popular:</span>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>Web Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src="./images/man.png" alt=""/>

            </div>
        </div>
    </div>
  )
}

export default Featured
