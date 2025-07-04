import React from 'react';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Space, Switch } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { changeSanctions } from '../../redux-state/redusers/data';

const SwitchSanctions = () => {

    const isLoading = useSelector(state => state.dataSlice.isLoading);
    const isSanctions = useSelector(state => state.dataSlice.sanctions);
    const dispatch = useDispatch();

  return (
    <Space direction="gorizontal">
        <p>Санкционный режим</p>
        <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={isSanctions} 
            onChange={() => dispatch(changeSanctions(!isSanctions))}
            disabled={isLoading && isSanctions}
        />
    </Space>   
  )
}

export default SwitchSanctions;