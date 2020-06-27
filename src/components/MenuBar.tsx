import React from "react"
import {Avatar, Col, CounterBadge, Image, Row, Search} from "wix-style-react";
import * as Icon from 'react-bootstrap-icons';
import {classes} from "./MenuBar.st.css";
import logo from "../assets/poorvika-logo.png";
import {useSelector} from "react-redux";

export interface MenuBarProps {
}

export const MenuBar: React.FC<MenuBarProps> = () => {
    const cartCount = useSelector(state => state.cartCount)
    return <Row className={classes.container}>
        <Col span={3}>
            <Image fit="cover" src={logo} style={{
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
            <div className={classes.avatarCartContainer}>
                <Avatar name="John Doe" imgProps={{src: 'https://1234.me/4321.jpg'}}/>
                <Icon.Cart className={classes.icon}/>
                {cartCount !== 0 && <CounterBadge className={classes.cartCount}>{cartCount}</CounterBadge>}
            </div>
        </Col>
    </Row>;
}


