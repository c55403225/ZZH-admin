import React from "react";
import { Redirect } from "react-router-dom";

import Discover from '../page/discover'
import Artist from '../page/discover/c-pages/artist'

import Friend from '../page/friend'
import Mine from '../page/mine'


const routes = [
    {
        path: '/',
        exact: true,
        render: () => {
            return <Redirect to="/discover"></Redirect>
        }
        // render: () => (
        //     <Redirect to="/discover"></Redirect>
        // )
    },
    {
        path: '/discover',
        component: Discover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/continer" />
                )
            },
            {
                path: "/discover/artist",
                component: Artist
            }
        ]
    },
//  "集团简介",
    {
        path: '/groupProfile',
        component: Mine,
    },
    // 集团视频
    {
        path: '/groupIdeo',
        component: Mine,
    },
    // 经营理念
    {
        path: '/managementIdea',
        component: Mine,
    },
    // 业务领域
    {
        path: '/businessArea',
        component: Mine,
    },
    // 联系我们
    {
        path: '/contactUs',
        component: Mine,
    }
    
]
export default routes