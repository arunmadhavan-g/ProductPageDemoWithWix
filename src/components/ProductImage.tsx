import React, {useEffect, useState} from "react"
import {Col, Image, Row} from "wix-style-react";

import {ImageThumbs} from "./ImageThumbs";

export interface ProductImageProps {
    images: string[]
}

export const ProductImage: React.FC<ProductImageProps> = ({images}: ProductImageProps) => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    useEffect(() => {
        setCurrentImage(images[0]);
    }, [images])
    return (
        <Row>
            <Col span={3}>
                <ImageThumbs images={images} setImage={setCurrentImage}/>
            </Col>
            <Col span={8}>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <Image src={currentImage} style={{width: "180px", height: "450px", backgroundColor: "#FFFFFF"}}
                           fit="contain"/>
                </div>
            </Col>
        </Row>
    );
}

