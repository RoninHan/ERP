import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { MenuList } from './menuList';
import { HeaderLayout } from './header';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

export const AntdLayout = (props: any) => {
    console.log(props)

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <MenuList collapsed={collapsed} />
            <Layout className="site-layout">
                <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}