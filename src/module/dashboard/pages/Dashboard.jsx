import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Home from '../components/Home';
import Blogs from '../components/Blogs';
import Users from '../components/Users';
import Notifications from '../components/Notifications';
import FAQ from '../components/FAQ';
import Settings from '../components/Settings';
import Accounts from '../components/Accounts';
import Profile from '../../user/pages/profile';

const Dashboard = () => {
    const [activePage, setActivePage] = useState('Home');

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
            case 'FAQ':
                return <FAQ />;
            case 'Settings':
                return <Settings />;
            case 'Accounts':
                return <Accounts />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="flex max-h-screen">
            <Sidebar onMenuItemClick={setActivePage} />
            <MainContent activePage={activePage}>
                {renderPageContent()}
            </MainContent>
        </div>
    );
};

export default Dashboard;
