import React from 'react';

import { useSelector } from 'react-redux';

import { Button } from 'antd';
import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';


const ButtonLoading = (props) => {

    const { children, action } = props;

    const isLoading = useSelector(state => state.dataSlice.isLoading);

    return (
        <ConfigProvider
            theme={{
                token: {
                fontFamily: "caveat",
                fontSize: "1.2rem"
                }
            }}
        >
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={isLoading && { icon: <SyncOutlined spin /> }}
                onClick={action}
                style={{ width: 186, fontWeight: 'bold' }}
            >
                {children}
            </Button>
        </ConfigProvider>
    )
}

export default ButtonLoading;