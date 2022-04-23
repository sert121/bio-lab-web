import React, {useState, useEffect} from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon, HamburgerIcon,NavMenu,NavItem,NavLinks,NavItemBtn,NavBtnLink} from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);
    const [galleryClick,setGalleryClick] = useState(false);
    const [contactClick,setContactClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
        setGalleryClick(false);
        setContactClick(false);
    }
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
        setGalleryClick(false);
        setContactClick(false);
    }
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
        setGalleryClick(false);
        setContactClick(false);
    }
      const handleGalleryClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(false);
        setGalleryClick(true);
        setContactClick(false);
    }
        const handleContactClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(false);
        setGalleryClick(false);
        setContactClick(true);
    }
  

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> 
                    
                            <div style={{fontSize:"0.7em",fontFamily:"'DM Sans',sans-serif"}}>Mechano Biochemistry Lab</div>
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                            <div style={{fontFamily:"'DM Sans',sans-serif"}}>Home</div>
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                            <NavLinks to='/publications' onClick={closeMobileMenu}>
                            <div style={{fontFamily:"'DM Sans',sans-serif"}}>Publications</div>
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleProductsClick} productsClick={productsClick}>
                            <NavLinks to='/scientists' onClick={closeMobileMenu}>
                            <div style={{fontFamily:"'DM Sans',sans-serif"}}>Scientists</div>
                            </NavLinks>
                        </NavItem>
                        
                        <NavItem onClick={handleGalleryClick} galleryClick={galleryClick}>
                            <NavLinks to='/gallery' onClick={closeMobileMenu}>
                            <div style={{fontFamily:"'DM Sans',sans-serif"}}>Gallery</div>
                            </NavLinks>
                        </NavItem>

                        <NavItem onClick={handleContactClick} galleryClick={contactClick}>
                            <NavLinks to='/contact' onClick={closeMobileMenu}>
                            <div style={{fontFamily:"'DM Sans',sans-serif"}}>Contact Us</div>
                            </NavLinks>
                        </NavItem>



{/*                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-up'>
                                    <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
*/}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
