import React from "react"
import {Col, Image, Row} from "wix-style-react";
import vivoFront from "../assets/vivo-front.png";

import {ImageThumbs} from "./ImageThumbs";

export interface ProductImageProps {
}

export const ProductImage: React.FC<ProductImageProps> = () => (
    <Row>
        <Col span={3}>
            <ImageThumbs/>
        </Col>
        <Col span={8}>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <Image src={vivoFront} style={{width: "180px"}}/>
            </div>
        </Col>
    </Row>
)

