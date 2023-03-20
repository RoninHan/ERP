import type { RouteObject } from 'react-router-dom'

// 扩展Route定义
export interface RouteProps extends RouteObject {
    path?: string,
    element?: React.ReactNode | null,
    meta?: {
        auth?: boolean,
        roles?: any,
        unRoles?: any,
        name?: string,
        icon?: any,
    }
    show?: boolean,
    children?: RouteProps[] | undefined
}
