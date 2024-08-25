import React from 'react';
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

const MainContent = ({ activePage }) => {

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
        <div className="flex-1 overflow-y-scroll">
            <SearchSection className='' />
            <div className="mt-0 p-4">
                {renderPageContent(activePage)}
            </div>
        </div>
    );
};
export default MainContent;
