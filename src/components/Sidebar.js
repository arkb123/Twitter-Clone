import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOptions from './SidebarOptions';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar_twitterIcon"/>
            <SidebarOptions active Icon={HomeIcon} text="Home" />
            <SidebarOptions Icon={SearchIcon} text="Explore" />
            <SidebarOptions Icon={NotificationsIcon} text="Notification" />
            <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
            <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOptions Icon={ListAltIcon} text="Lists" />
            <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
            <SidebarOptions Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>

            {/* Sidebar component */}
        </div>
    );
}

export default Sidebar
