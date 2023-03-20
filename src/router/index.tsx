import React from 'react'
import { SmileOutlined } from '@ant-design/icons';
import { AntdLayout } from '@/layout';

import Login from '@/pages/login';
import { RouteProps } from '@/types/routes';
import { ErrorPage } from '@/pages/404';

import { UserPage } from "@/pages/user"
import { DepartmentPage } from '@/pages/department';


const routes: RouteProps[] = [
    {
        path: "/",
        element: <AntdLayout />,
        meta: {
            name: "User",
            icon: <SmileOutlined />
        },
        children: [
            {
                path: "/userList", // 路由路径
                meta: {
                    name: "user"
                },
                element: <UserPage />, // 懒加载 路由组件

            },
            {
                path: "/department", // 路由路径
                meta: {
                    name: "department"
                },
                element: <DepartmentPage />, // 懒加载 路由组件
            }
        ]
    },
    { path: '*', show: false, element: <ErrorPage /> }
];


export default routes;