import React, { useContext } from 'react';
import Home from './Home';
import Blogs from './Blogs';
import Users from './Users';
import Notifications from './Notifications';
import FAQ from './FAQ';
import Settings from './Settings';
import Accounts from './Accounts';
import Profile from '../../user/pages/profile';
import SearchSection from './Search/dash_search';
import Mails from './Mails';
import Reports from './Reports';
import { BlogDataContext } from '../../../context/Blog_Context';

const MainContent = ({ activePage }) => {

    const {theme,theme2,fontColor,fontStyle,fontWeight,setTheme,setTheme2,setFontSize,setFontColor,setFontWeight,setFontStyle,setBackgroundImage} = useContext(BlogDataContext);


    const renderPageContent = () => {
        switch (activePage) {
            case 'Home':
                return <Home />;
            case 'Blogs':
                return <Blogs />;
            case 'Users':
                return <Users />;
            case 'Notifications':
                return <Notifications />;
            case 'Mails':
                return <Mails />;
            case 'Settings':
                return <Settings />;
            case 'Reports':
                return <Reports />;
            case 'Accounts':
                return <Accounts />;
            default:
                return <Home />;
        }
    };

    return (
        <div className={`flex-1 overflow-y-scroll bg-${theme} text-${fontColor}-200 ${fontWeight} ${fontStyle}`}>
            <SearchSection className='' />
            <div className="mt-0 p-4">
                {renderPageContent(activePage)}
            </div>
        </div>
    );
};
export default MainContent;
