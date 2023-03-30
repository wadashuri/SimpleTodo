import React, { useState } from "react";
import { useLogin } from "../../queries/AuthQuery";
import { Button, Form, Container, Card } from "react-bootstrap";
const LoginPage: React.VFC = () => {
    const login = useLogin();
    const [email, setEmail] = useState("admin@example.com");
    const [password, setPassword] = useState("admin");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login.mutate({ email, password });
    };
  return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
          <Card className="p-4 bg-light">
              <h2 className="text-center mb-4">ログイン</h2>
              <Form onSubmit={handleLogin} className="p-4">
                  <Form.Group controlId="email">
                      <Form.Label>メールアドレス</Form.Label>
                      <Form.Control
                          type="email"
                          placeholder="メールアドレス"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                  </Form.Group>
                  <Form.Group controlId="password">
                      <Form.Label>パスワード</Form.Label>
                      <Form.Control
                          type="password"
                          placeholder="パスワード"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                  </Form.Group>
                  <Button
                      variant="primary"
                      type="submit"
                      className="btn-block mt-4"
                  >
                      ログイン
                  </Button>
              </Form>
          </Card>
      </Container>
  );
};

export default LoginPage;
