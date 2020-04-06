import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FinalScore from '../components/FinalScore';
import HowToPlay from '../components/HowToPlay';
import QuestionsAndAnswers from '../components/QuestionsAndAnswers';
import SelectProfileType from '../components/SelectProfileType';
import SplashScreen from '../components/SplashScreen';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const routes = {
    SCORE: '/score',
    HOW_TO_PLAY: '/how-to-play',
    QUESTION: '/question',
    SELECT_PROFILE: '/select-profile',
    SPLASH_SCREEN: '/splash-screen',
};

export default function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={routes.SCORE}>Score</Link>
                    </li>
                    <li>
                        <Link to={routes.HOW_TO_PLAY}>How To Play</Link>
                    </li>
                    <li>
                        <Link to={routes.QUESTION}>Questions and Answers</Link>
                    </li>
                    <li>
                        <Link to={routes.SELECT_PROFILE}>Select profile</Link>
                    </li>
                    <li>
                        <Link to={routes.SPLASH_SCREEN}>Splash screen</Link>
                    </li>
                </ul>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path={routes.SCORE}>
                        <FinalScore />
                    </Route>
                    <Route path={routes.HOW_TO_PLAY}>
                        <HowToPlay />
                    </Route>
                    <Route path={routes.QUESTION}>
                        <QuestionsAndAnswers />
                    </Route>
                    <Route path={routes.SELECT_PROFILE}>
                        <SelectProfileType />
                    </Route>
                    <Route path={routes.SPLASH_SCREEN}>
                        <SplashScreen />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
