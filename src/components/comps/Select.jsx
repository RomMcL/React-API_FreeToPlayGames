import React from 'react';

import { useSelector } from 'react-redux';

import { Select } from 'antd';
import { ConfigProvider } from 'antd';


const SelectAntd = (props) => {

    const { options, defaultValue, action } = props;

    const isLoading = useSelector(state => state.dataSlice.isLoading);

    return (
        <ConfigProvider
            theme={{
                token: {
                fontFamily: "caveat", 
                }
            }}
        >
            <Select
                defaultValue={defaultValue}
                onChange={action}
                options={options}
                disabled={isLoading ? true : false}
                style={{ width: 186 }}
            />
        </ConfigProvider>
    )
}

export default SelectAntd;