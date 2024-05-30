import { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [showNavMenu, setShowNavMenu] = useState(false);

    const menuItems = ['Home', 'Work', 'About', 'Contact'];
    const externalNav = [
        {
            name: 'Resume',
            link: 'https://drive.google.com/uc?id=18-XhqjRxup3NQMsTX8sgy2n2fQRIe9uT&export=download',
        }
    ];
    return (
        <nav>
            <GiHamburgerMenu className="nav_btn" onClick={() => setShowNavMenu(prevState => !prevState)} />
            <div className={`nav_menu ${showNavMenu ? 'show' : ''}`}>
                {menuItems.map(menu => {
                    return (
                        <Link key={menu} className='nav_item' activeClass="active" to={`${menu.toLowerCase()}`} spy={true} smooth={true} offset={-100} duration={1000} onSetActive={() => setShowNavMenu(false)}>
                            {menu}
                        </Link>
                    );
                })}
                {externalNav.map((item, index) => {
                    return <a key={index} className='nav_item' href={item.link} target='_blank' rel='noopenner'>{item.name}</a>
                })}
            </div>
        </nav>
    );
}

export default Navbar;