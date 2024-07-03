import React from 'react'
import './Header.css'
import OlxLogo from '../../Assets/OlxLogo'
import Search from '../../Assets/Search'
import Arrow from '../../Assets/Arrow'
import SellButton from '../../Assets/SellButton'
import PlusSellButton from'../../Assets/PlusSellButton'
function Header() {
  return (
    <div className="HeaderParent">
      <div className="HeaderChild">
        <div className="brandname">
          <OlxLogo />
        </div>
        <div className="PlaceSearch">
          <Search/>
          <input type="text" />
          <Arrow/>
        </div>
        <div className="ProductSearch">
          <div className="input">
            <input type="text" placeholder='Find car,mobile phone and more...' />
          </div>
          <div className="SearchAction">
            <Search color='#ffffff'></Search>
          </div>
        </div>
        <div className="language">
          <span>ENGLISH</span>
          <Arrow/>
        </div>

        <div className="sellMenu">
          <SellButton/>
          <div className="sellMenuContent">
            <PlusSellButton/>
            <span>SELL</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
