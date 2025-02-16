import React from 'react';
import { useResize } from '../../custom-hooks/custom-hook-lib';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

const ButtonShow = (props) => {
    const { action, show } = props;
    const { isScreenDesktop } = useResize();
    return (
        <Tooltip
                title={isScreenDesktop && (!show ? 'Раскрыть' : 'Скрыть')} 
                color={'geekblue'} 
                mouseLeaveDelay={0}                        
        >
            <Button
                type="primary" 
                shape="circle" 
                icon={!show ? <DownOutlined /> : <UpOutlined />} 
                onClick={action}
            />
        </Tooltip>
    )
    
}

export default ButtonShow;