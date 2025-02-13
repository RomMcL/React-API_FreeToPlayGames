import React from 'react';
import { Pagination } from 'antd';
import { ConfigProvider } from 'antd';

const PaginationGameList = (props) => {

    const { total, currentPage, changePaginate, pageSize, arrSizes, changePageSize } = props;

    return (
        <ConfigProvider
        theme={{
            components: {
             Pagination: {
                itemBg: 'var(--color-3)',
                itemActiveBg: 'var(--color-2)',
                fontSize: '1.1rem',
             },
            },
            token: {
                colorBgContainer: 'var(--color-3)',
               fontFamily: 'inherit',
             },
          }}
        >
            <Pagination
                total={total}
                current={currentPage}
                pageSize={pageSize}
                onChange={(current, newPageSize) => {
                    changePageSize(newPageSize)
                    changePaginate(pageSize !== newPageSize ? 1 : current)
                }}
                showSizeChanger
                pageSizeOptions={arrSizes}             
            />
        </ConfigProvider>
    )
}

export default PaginationGameList;