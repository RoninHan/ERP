import React, { useState } from 'react'
import { Button, Space } from 'antd';
import { LTTable } from '@/components/table';

export const UserPage = () => {
    const searchList: any = [
        {
            type: "text",
            name: "name",
            title: "姓名"
        }
    ]
    const columns: any = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: '年齡',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '電話號碼',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '聯係地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '郵箱',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: '部門',
            key: 'dep',
            dataIndex: 'dep',
        },
        {
            title: '角色',
            key: 'roles',
            dataIndex: 'roles',

        },
        {
            title: '操作',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <Button type="link">編輯</Button>
                </Space>
            ),
        },
    ];

    const data: any = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <LTTable columns={columns} searchList={searchList} data={data}>
            <>
                <Button type="primary">添加人員</Button>
            </>
        </LTTable>
    )
}