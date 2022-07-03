import './header.scss'
import Logo from '../../img/Group176.png'
import Hum from '../../img/MenuIcon.png'
import { Link, NavLink } from 'react-router-dom'
import { Input } from 'antd';
import { useState } from 'react'
import iks from '../../img/icon.png'
import Container from '../container/container'

function Header() {
      
      const onSearch = (value) => console.log(value);
      const { Search } = Input;
      const [menu, setmenu] = useState(false);
      
      const menular = () => {
         setmenu(true)
      }

      const iksla = () => {
         setmenu(false)
      }



    return (
      <Container>

        <header className="header">
            <div className='header_ota'>
              <Link className='header_link' to='/'>
              <img className='header_img' src={Logo} alt="kompanu_logo" />
            </Link>
            <img className='header_hum' onClick={menular} src={Hum} alt="humm" />
            </div>
            <ul className="header_list">
               <li className="header_item">
                <NavLink className='header_navlink' to='/'>
                   All
                </NavLink>
               </li>
               <li className="header_item">
                <NavLink className='header_navlink' to='/erujr'>
                   Design Theory
                </NavLink>
               </li>
               <li className="header_item">
                <NavLink className='header_navlink' to='/err'>
                   UX
                </NavLink>
               </li>
               <li className="header_item">
                <NavLink className='header_navlink' to='/etgfr'>
                   UI
                </NavLink>
               </li>
               <li className="header_item">
                <NavLink className='header_navlink' to='/bgf'>
                   Typography
                </NavLink>
               </li>
            </ul>
            <Search placeholder="search" onSearch={onSearch} enterButton />

            {menu && 
            <div className='menyla'>
            <div className="mnu">
             <Link className='header_link' to='/'>
               <img className='header_img' src={Logo} alt="kompanu_logo" />
             </Link>
             <img src={iks} className='cursor' onClick={iksla} alt="ikslar" />
            </div>
             <ul className="header_list_menu">
               <li className="header_item_menu">
                <NavLink onClick={iksla} className='header_navlink' to='/'>
                   All
                </NavLink>
               </li>
               <li className="header_item_menu">
                <NavLink onClick={iksla} className='header_navlink' to='/erujr'>
                   Design Theory
                </NavLink>
               </li>
               <li className="header_item_menu">
                <NavLink onClick={iksla} className='header_navlink' to='/err'>
                   UX
                </NavLink>
               </li>
               <li className="header_item_menu">
                <NavLink onClick={iksla} className='header_navlink' to='/etgfr'>
                   UI
                </NavLink>
               </li>
               <li className="header_item_menu">
                <NavLink onClick={iksla} className='header_navlink' to='/bgf'>
                   Typography
                </NavLink>
               </li>
            </ul></div>}
        </header>
      </Container>
    )
}

export default Header