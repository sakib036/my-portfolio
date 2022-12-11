import React from 'react';
import Projects from '../../Projects/Projects';
import Home from '../Home/Home';
import SendMail from '../SendMail/SendMail';

const HomeLayout = () => {
    return (
        <div>
            <Home></Home>
            <Projects></Projects>
            <SendMail></SendMail>
        </div>
    );
};

export default HomeLayout;