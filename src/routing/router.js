import React from "react";
import {
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import history from './history';
import routes from './routes';
import FinalScore from '../components/FinalScore';
import HowToPlay from '../components/HowToPlay';
import QuestionsAndAnswers from '../components/QuestionsAndAnswers';
import SelectProfileType from '../components/SelectProfileType';
import SplashScreen from '../components/SplashScreen';

export default function BasicExample() {
    return (
        <Router history={history}>
            <div>
                <ul className="tmp-header">
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

                <Switch>
                    <Route exact path={routes.HOME}>
                        <SplashScreen />
                    </Route>
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
