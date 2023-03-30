import React, { useEffect } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link,RouteProps ,Redirect} from "react-router-dom";
import PostPage from "./pages/posts";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/error";
import HelpPage from "./pages/help";
import { useLogout,useUser } from "./queries/AuthQuery";
import { useAuth } from "./hooks/AuthContext"

const Router = () => {
    const logout = useLogout()
    const { isAuth, setIsAuth } = useAuth()
    const { isLoading, data: authUser } = useUser()
    useEffect(() => {
        if(authUser) {
            setIsAuth(true)
        }
    }, [authUser]);

    const GuardRoute = (props: RouteProps) => {
         if(!isAuth) return <Redirect to="/login" />
         return <Route {...props} />
    }

    const LoginRoute = (props: RouteProps) => {
        if(isAuth) return <Redirect to="/" />
        return <Route {...props} />
   }

    const navgation = (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        SimpleToDo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            ホーム
          </Nav.Link>
          <Nav.Link as={Link} to="/help">
            ヘルプ
          </Nav.Link>
          <NavDropdown title="メニュー">
            <NavDropdown.Item onClick={() => logout.mutate()}>
              ログアウト
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )

    const loginNavgation = (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        SimpleToDo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/help">
            ヘルプ
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            ログイン
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )

    if (isLoading) return <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status"></div>
                          </div>

    return (
        <BrowserRouter>
            { isAuth ? navgation : loginNavgation}
            <Switch>
                <Route path="/help">
                    <HelpPage />
                </Route>
                <LoginRoute path="/login">
                    <LoginPage />
                </LoginRoute>
                <GuardRoute exact path="/">
                    <PostPage />
                </GuardRoute>
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
