import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { DoubleLeftOutlined } from '@ant-design/icons';
import { ConfigProvider } from "antd";


const ButtonBack = () => {

    const navigate = useNavigate();

    return (
        <ConfigProvider
            theme={{
                token: {
                fontFamily: "caveat",
                fontSize: "1.5rem"
                }
            }}
        >
            <Button type="primary" icon={<DoubleLeftOutlined />}
                    size="large" onClick={() => {navigate('/main')}}
            >
                Назад к списку
            </Button>
        </ConfigProvider>
    )

}

export default ButtonBack;