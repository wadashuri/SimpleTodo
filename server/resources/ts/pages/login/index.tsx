import React, { useState } from "react";
import { useLogin } from "../../queries/AuthQuery"
import { Button, Form } from "react-bootstrap";
const LoginPage: React.VFC = () => {
    const login = useLogin();
    const [email,setEmail] = useState('admin@example.com')
    const [password,setPassword] = useState('admin')

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login.mutate({ email,password })
    }
    return (
        <div className="login-page">
        <div className="login-panel">
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>パスワード</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              ログイン
            </Button>
          </Form>
        </div>
      </div>
    );
};

export default LoginPage;
