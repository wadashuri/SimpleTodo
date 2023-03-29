import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HelpPage: React.VFC = () => {
    return (
        <Container>
            <Row className="align-items-center justify-content-center vh-100">
                <Col className="text-center">
                    <h1>ヘルプ</h1>
                    <p>使い方を解説します</p>
                    <p>このサイトはログインが必要です</p>
                </Col>
            </Row>
        </Container>
    );
};

export default HelpPage;
