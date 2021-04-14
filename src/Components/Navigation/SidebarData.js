import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import BusinessIcon from '@material-ui/icons/Business';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AdminHome from '../Admin/Home/AdminHome';
import Category from '../Admin/Category/Category';
export const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
    component: <AdminHome />,
  },
  {
    title: 'Category',
    icon: <CategoryIcon />,
    link: '/category',
    component: <Category />,
  },
  {
    title: 'Products',
    icon: <BusinessIcon />,
    link: '/products',
  },

  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard',
  },
];
