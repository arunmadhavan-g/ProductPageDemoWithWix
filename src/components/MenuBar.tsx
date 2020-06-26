import React from "react"
import {Avatar, Col, Container, Image, Row, Search} from "wix-style-react";
import * as Icon from 'react-bootstrap-icons';
import logo from "../assets/poorvika-logo.png";

export interface MenuBarProps {
}

export const MenuBar: React.FC<MenuBarProps> = () =>
    <div id="a1" style={{margin: "0 50px;"}}>
        <Container>
            <Row>
                <Col span={3}>
                    <Image fit="cover" src={logo}
                           style={{
                               backgroundColor: "#FFFFFF",
                               height: "max-content",
                               width: "max-content"
                           }}/>
                </Col>
                <Col span={7}>
                    <Search
                        debounceMs={250}
                        onChange={() => {
                        }}
                    />
                </Col>
                <Col span={2}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Avatar name="John Doe" imgProps={{src: 'https://1234.me/4321.jpg'}}/>
                        <Icon.Cart style={{
                            height: "30px",
                            width: "30px",
                            marginLeft: "15px"
                        }}/>
                    </div>
                </Col>
            </Row>

        </Container>
    </div>


