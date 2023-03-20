import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];
/**
 * @param title 标题
 * @param path 路径
 * @param icon 图标
 * @param show 显示、隐藏
 * @param children 子级
 */
export interface Router {

    path: string;
    icon?: string;
    show?: boolean;
    meta?: any;
    children?: Router[];
}

export const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}