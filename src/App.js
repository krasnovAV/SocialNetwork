import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Route from "react-router-dom/es/Route";
import News from "./Components/Content/News/News";
import Friends from "./Components/Content/Friends/Friends";
import Music from "./Components/Content/Music/Music";
import ProfileContainer from "./Components/Content/Profile/ProfileContainer";
import MessagesContainer from "./Components/Content/Messages/MessagesContainer";
import UsersContainer from "./Components/Content/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="Body">
            <HeaderContainer/>
            <div className="wrapper">
                <Navigation/>
                <Route path={'/profile/:userId'}
                       render={() => <ProfileContainer/>}/>
                <Route path={'/messages'}
                       render={() => <MessagesContainer/>}/>
                <Route path={'/users'}
                       render={() => <UsersContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/friends'} component={Friends}/>
                <Route path={'/music'} component={Music}/>
            </div>
        </div>
    )
}

export default App;
