import React from 'react'
import { getItem, MenuItem, Router } from './interface';
import { Link } from 'react-router-dom';

export const getMenu = (menuArr: Router[]): MenuItem[] => {
    return menuArr.reduce((acc: MenuItem[], item) => {
        if (item.show === false) return [...acc];

        if (item.children && item.children.length > 0) {
            let newItem = { ...getItem(item?.meta?.name, item.path, item?.meta?.icon), children: getMenu(item.children) } as MenuItem;
            return [...acc, newItem];
        } else {
            let newItem = getItem(<Link to={item.path}> {item?.meta?.name}</Link>, item.path, item?.meta?.icon);
            return [...acc, newItem];
        }
    }, []);
};