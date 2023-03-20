import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { SearchForm } from './form';

export const LTTable = (props: any) => {
    const { columns, data, src, searchList = [], children } = props;

    const [tableData, setTableData] = useState<any>([]);

    const init = () => {
        try {
            setTableData(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        init();
    }, [init])

    const search = (searchForm: any) => {
        let names = searchList.map((search: any) => search.name)
        console.log(searchForm.getFieldsValue(names))
    }

    return (
        <div>
            <div className='flex justify-between pb-4'>
                <SearchForm searchList={searchList} onCallBack={search} />
                <div>
                    {children}
                </div>
            </div>

            <Table columns={columns} dataSource={tableData} />
        </div>
    )
}