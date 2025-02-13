import React from 'react';

import logo from '../../../images/logo.png' 

import cssHeader from '../../../styles/views/global/header.css';

const { HeaderContainer, HeaderElements  } = cssHeader;

const Header = () => {
    
    return (      
        <HeaderContainer>
            <HeaderElements.SiteLogo $background={logo}/>
            <HeaderElements.SiteName>
                <h1>Free To Play Games</h1>
            </HeaderElements.SiteName>
        </HeaderContainer>
    )
}
  
export default Header;