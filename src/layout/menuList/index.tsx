import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { useRouterStore } from '@/stores';
import { getMenu } from './getMenu';



const { Sider } = Layout;


export const MenuList = (props: any) => {
    const { collapsed } = props;
    const RouterStore = useRouterStore();
    const location = useLocation();

    const menuList = RouterStore.GET_ROUTES;
    const [selectedKeys, setSelectedKeys] = useState<any>([])
    const [openKeys, setOpenKeys] = useState<any>([]);

    const menus = useMemo(() => {
        return getMenu(menuList)
    }, [menuList, getMenu])

    const getOpenKeys = useMemo(() => {
        return menus
            .filter((menu: any) => menu.children.filter((item: any) => item.key === location.pathname).length > 0)
            .map((item: any) => item.key)
    }, [menus, location.pathname])

    useEffect(() => {
        setSelectedKeys([location.pathname])
        setOpenKeys(getOpenKeys)
    }, [location, setSelectedKeys, setOpenKeys, getOpenKeys]);

    const onSelect = ({ selectedKeys }: any) => {
        setOpenKeys(selectedKeys[selectedKeys.length - 1])
    }

    return (
        <Sider trigger={null}  >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                openKeys={openKeys}
                items={getMenu(menuList)}
                onSelect={onSelect}
                selectedKeys={selectedKeys}
            />
        </Sider>
    )
}




