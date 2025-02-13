import React from 'react';

import cssHeader from '../../../styles/views/global/header.css';

const { HeaderContainer, HeaderElements  } = cssHeader;

const Header = () => {
    
    return (      
        <HeaderContainer>
            <HeaderElements.SiteLogo />
            <HeaderElements.SiteName>
                <h1>Free To Play Games</h1>
            </HeaderElements.SiteName>
        </HeaderContainer>
    )
}
  
export default Header;