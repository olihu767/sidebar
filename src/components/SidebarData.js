import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as VscIcons from 'react-icons/vsc';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <RiIcons.RiDashboardLine />,
    cName: 'nav-text'
  },
  {
    title: 'Create Dashboard',
    path: '/CreateDashboard',
    icon: <AiIcons.AiOutlinePlusCircle />,
    cName: 'nav-text'
  },
  {
    title: 'All Graphs',
    path: '/AllGraphs',
    icon: <VscIcons.VscGraph />,
    cName: 'nav-text'
  },
  {
    title: 'Clear Dashboard',
    path: '/clearDashboard',
    icon: <AiIcons.AiOutlineClear />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
  },
  {
    title: 'Give Feedback!',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
