import React from 'react';
import Header from './Header';
import LoginViaSmsPage from './LoginViaSmsPage';
import EnterPage from './EnterPage';

export default class Robin extends React.Component {
    render() {
        return (
            <div className="main_container">
                <Header />
                <LoginViaSmsPage />
            </div>
        );
    }
}


