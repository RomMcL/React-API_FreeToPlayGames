import React from 'react';

import { useSelector } from 'react-redux';

import { Radio } from 'antd';
import { ConfigProvider } from 'antd';


const RadioButton = (props) => {

    const { options, defaultValue, size, action } = props;

    const isLoading = useSelector(state => state.dataSlice.isLoading);

    return (
        <ConfigProvider
            theme={{
                token: {
                fontFamily: "caveat",
                fontSize: "1.1rem"                
                }
            }}
        >
            <Radio.Group
                size={size}
                block
                options={options}
                defaultValue={defaultValue}
                optionType="button"
                buttonStyle="solid"
                onChange={action}
                disabled={isLoading ? true : false}
                style={{ width: 186, fontWeight: 'bold' }}
            />
        </ConfigProvider>
    )
}

export default RadioButton;