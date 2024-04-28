import { BarChart4, Images, MailWarning, Newspaper, Users } from "lucide-react";
import { LiaUserShieldSolid } from 'react-icons/lia'

export const publicMenuItem = [
    {
        label: 'Timeline',
        menuIcon: Newspaper,
        link: '',
    },
    {
        label: 'Reports',
        menuIcon: MailWarning,
        link: 'reports',
    },
    {
        label: 'Dashboard',
        menuIcon: BarChart4,
        link: 'dashboard',
    },
    {
        label: 'Gallery',
        menuIcon: Images,
        link: 'gallery',
    },
] 

export const privateMenuItem = [
    {
        label: 'Teams',
        menuIcon: Users,
        link: 'teams',
    },
    {
        label: 'Access',
        menuIcon: LiaUserShieldSolid,
        link: 'access',
    },
]