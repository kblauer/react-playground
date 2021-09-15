import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";

function generateNavList() {
    const homeNav = {
        text: "Home",
        icon: <HomeIcon/>,
        link: "/",
    };
    const ticTacToeNav = {
        text: "TicTacToe",
        icon: <AppsIcon/>,
        link: "/ttt"
    };

    return [homeNav, ticTacToeNav];
}

/**
 * TopBarUtil holds basic utilities for initializing and running
 * the material ui top bar.  Contains the list of nav items in the drawer
 */
class TopBarUtil {
    _navListItems = [];

    constructor() {
        this._navListItems = generateNavList();
    }

    get navListItems() {
        return this._navListItems;
    }

    set navListItems(navList) {
        this._navListItems = navList;
    }

    /**
     * Creates static tab info for quick nav list creation. Add new tabs in TopBarUtil.generateNavList()
     * @returns {[{icon: JSX.Element, text: string, link: string}]}
     */
    static getNavList() {
        return generateNavList();
    }
}

export default TopBarUtil;