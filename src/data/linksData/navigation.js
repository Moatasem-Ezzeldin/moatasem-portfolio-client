import { Home, CircleUserRound, UsersRound, UserPlus, LayoutDashboard } from "lucide-react";
import {
  User,
  Code2,
  BriefcaseBusiness,
  FolderGit2,
  MessageSquareQuote,
  Mail,
} from "lucide-react";

const navigation = {
    en: {
        guest: [
        {id: 1, label: "Home", target: "hero", type: "scroll", icon: Home},
        {id: 2, label: "About", target: "about", type: "scroll", icon: User},
        {id: 3, label: "Skills", target: "skills", type: "scroll", icon: Code2},
        {id: 4, label: "Services", target: "services", type: "scroll", icon: BriefcaseBusiness},
        {id: 5, label: "Projects", target: "projects", type: "scroll", icon: FolderGit2},
        {id: 6, label: "Testimonials", target: "Testimonials", type: "scroll", icon: MessageSquareQuote},
        {id: 7, label: "Contact", target: "contact", type: "scroll", icon: Mail},
        
        ],
        user: [
            {id: 1, label: "Overview", to: "/dashboard/overview", type: "route", icon: LayoutDashboard},
            {id: 2, label: "Profile", to: "/dashboard/profile", type: "route", icon: CircleUserRound},
        ],
        admin: [
            {id: 1, label: "Overview", to: "/dashboard/overview", type: "route", icon: LayoutDashboard},
            {id: 2, label: "Profile", to: "/dashboard/profile", type: "route", icon: CircleUserRound},
            {id: 3, label: "Add User", to: "/dashboard/admin/users/add", type: "route", icon: UserPlus},
            {id: 4, label: "Users", to: "/dashboard/admin/users", type: "route", icon: UsersRound},
            
        ],
    },
    ar: {
        guest: [
        {id: 1, label: "البيت", target: "hero", type: "scroll", icon: Home},
        {id: 2, label: "حول", target: "about", type: "scroll", icon: User},
        {id: 3, label: "المهارات", target: "skills", type: "scroll", icon: Code2},
        {id: 4, label: "الخدمات", target: "services", type: "scroll", icon: BriefcaseBusiness},
        {id: 5, label: "المشاريع", target: "projects", type: "scroll", icon: FolderGit2},
        {id: 6, label: "الأراء", target: "Testimonials", type: "scroll", icon: MessageSquareQuote},
        {id: 7, label: "التواصل", target: "contact", type: "scroll", icon: Mail},
        
        ],
        user: [
            {id: 1, label: "Overview", to: "/dashboard/overview", type: "route", icon: LayoutDashboard},
            {id: 2, label: "Profile", to: "/dashboard/profile", type: "route", icon: CircleUserRound},
        ],
        admin: [
            {id: 1, label: "Overview", to: "/dashboard/overview", type: "route", icon: LayoutDashboard},
            {id: 2, label: "Profile", to: "/dashboard/profile", type: "route", icon: CircleUserRound},
            {id: 3, label: "Add User", to: "/dashboard/admin/users/add", type: "route", icon: UserPlus},
            {id: 4, label: "Users", to: "/dashboard/admin/users", type: "route", icon: UsersRound},
            
        ],
    }
};

export default navigation;