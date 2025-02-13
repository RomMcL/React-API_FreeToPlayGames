import React from 'react';

import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

const ButtonShow = (props) => {
    const { action, show } = props;
    return (
        <Tooltip title={!show ? 'Раскрыть' : 'Скрыть'} color={'geekblue'}>
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