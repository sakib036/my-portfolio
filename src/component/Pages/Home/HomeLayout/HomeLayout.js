import React from 'react';
import Aboutme from '../../Aboutme/Aboutme';
import Projects from '../../Projects/Projects';
import Home from '../Home/Home';
import SendMail from '../SendMail/SendMail';

const HomeLayout = () => {
    return (
        <div>
            <Home></Home>
            <Projects></Projects>
            <SendMail></SendMail>
            <Aboutme></Aboutme>
        </div>
    );
};

export default HomeLayout;