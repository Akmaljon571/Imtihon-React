import './header.scss'
import Logo from '../../img/Group176.png'
import Hum from '../../img/MenuIcon.png'
import { Link, NavLink } from 'react-router-dom'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

function Header() {
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );
      
      const onSearch = (value) => console.log(value);
      const { Search } = Input;
 



    return (
        <header className="header">
            <div className='header_ota'>
              <Link className='header_link' to='/'>
              <img className='header_img' src={Logo} alt="kompanu_logo" />
            </Link>
            <img className='header_hum' src={Hum} alt="humm" />
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
        </header>
    )
}

export default Header