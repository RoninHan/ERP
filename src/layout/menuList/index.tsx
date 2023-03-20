import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import { useRouterStore } from '@/stores';
import { getMenu } from './getMenu';


const { Sider } = Layout;


export const MenuList = (props: any) => {
    const { collapsed } = props;
    const RouterStore = useRouterStore()
    const menuList = RouterStore.GET_ROUTES;
    const [selectedKeys, setSelectedKeys] = useState<any>([])

    const onSelect = ({ key }: any) => {
        setSelectedKeys([key])
    }

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={getMenu(menuList)}
                onSelect={onSelect}
                selectedKeys={selectedKeys}
            />
        </Sider>
    )
}




