import React from 'react';

import { useNavigate, useLocation  } from 'react-router-dom';

import { Button } from 'antd';
import { QuestionCircleOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { ConfigProvider } from "antd";

import rommcl from '../../../images/rommcl.png'
import vk from '../../../images/vk.png'
import github from '../../../images/github.png'

import cssFooter from '../../../styles/views/global/footer.css';

const { FooterContainer, FooterElements  } = cssFooter;

const Footer = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const btnOptions = () => {
      return {
        icon: location.pathname === '/about' ? <DoubleLeftOutlined /> : <QuestionCircleOutlined />,
        iconPosition: location.pathname === '/about' ? 'start' : 'end',
        location: location.pathname === '/about' ? '/main' : '/about',
        title: location.pathname === '/about' ? 'Назад к списку' : 'О проекте',
      }
    };
    
    return (
        <FooterContainer>
            <FooterElements.CopyrightBlock>
                <h4>
                    &copy; Денисенков Роман, 2025
                    {new Date().getFullYear() !== 2025 && <span> - {new Date().getFullYear()}</span>}
                </h4>
                <span>(учебный проект)</span>
            </FooterElements.CopyrightBlock>
            <ConfigProvider
                theme={{
                token: {
                fontFamily: "caveat",
                fontSize: "1.8rem"
                }
                }}
            >
                <Button type='text' icon={btnOptions().icon} iconPosition={btnOptions().iconPosition}
                        size='large' onClick={() => {navigate(btnOptions().location)}} 
                        style={{ fontWeight: 'bold' }}
                >
                {btnOptions().title}
                </Button>
            </ConfigProvider>
            <FooterElements.ContactsBlock>
                <div>
                    <h4>Личный сайт</h4>
                    <div>
                        <a href="https://rommcl.ru" target="_blank">
                            <img src={rommcl} alt="RomMcL"></img>
                        </a>
                    </div>             
                </div>
                <div>
                    <h4>Соцсети</h4>
                    <div>
                        <a href="https://vk.com/romanmcl" target="_blank"> 
                            <img src={vk} alt="logoVK"></img>
                        </a>
                        <a href="https://github.com/RomMcL" target="_blank">
                            <img src={github} alt="logoGitHub"></img>
                        </a>
                    </div>
                </div>
            </FooterElements.ContactsBlock>
        </FooterContainer>
    )
}
  
export default Footer;