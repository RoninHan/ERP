import React from 'react';
import {
    Route
} from 'react-router-dom';
import { RouteInterface } from '@/interface';

const RouteWithSubRoutes = (route: RouteInterface, index: number) => {
    return (
        <Route key={index} path={route.path} element={<route.component />} />
    );
}

export {
    RouteWithSubRoutes
}