import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PostPage from "./pages/posts";
import LoginPage from "./pages/login";
import HelpPage from "./pages/help";
import CalendarPage from "./pages/calendar";
import { useLogout } from "./queries/AuthQuery";

const Router = () => {
    const logout = useLogout()
    useEffect(() => {
    }, []);

    const title: string = "hello word!!";
    return (
        <BrowserRouter>
            <header className="global-head">
                <ul>
                    <li>
                        <Link to="/">ホーム</Link>
                    </li>
                    <li>
                        <Link to="/calendar">カレンダー</Link>
                    </li>
                    <li>
                        <Link to="/help">ヘルプ</Link>
                    </li>
                    <li>
                        <Link to="/login">ログイン</Link>
                    </li>
                    <li onClick={() => logout.mutate()}>
                        <span>ログアウト</span>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route path="/help">
                    <HelpPage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/calendar">
                    <CalendarPage />
                </Route>
                <Route path="/">
                    <PostPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
