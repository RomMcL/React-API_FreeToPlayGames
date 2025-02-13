import React from 'react';

import { useNavigate, useLocation  } from 'react-router-dom';

import { Button } from 'antd';
import { QuestionCircleOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { ConfigProvider } from "antd";

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
    <div>
        <h1>Footer</h1>
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
    </div>     
    )
}
  
export default Footer;