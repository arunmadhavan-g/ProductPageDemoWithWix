import React from "react"
import {Col, Row} from "wix-style-react";
import {ButtonsContainer} from "./ButtonsContainer";
import {ProductImage} from "./ProductImage";
import {ProductContents} from "./ProductContents";
import {OptionTypes} from "./OptionTypes";
import {Delivery} from "./Delivery";
import {Synopsis} from "./Synopsis";
import {DetailedDescription} from "./DetailedDescription";
import {Specification} from "./Specification";
import vivoFront from "../assets/vivo-front.png";
import vivoBack from "../assets/vivo-back.png";
import vivoLeft from "../assets/vivo-left.png";
import vivoRight from "../assets/vivo-right.png";

export interface ProductDetailsProps {
}

const optionTypes = [
    {
        type: "Color",
        options: ["Red", "Blue", "Silver", "Black"]
    }, {
        type: "RAM",
        options: ["6GB", "8GB"]
    }, {
        type: "Storage",
        options: ["64GB", "128GB"]
    }
]

const images = [vivoFront, vivoRight, vivoBack, vivoLeft];

export const ProductDetails: React.FC<ProductDetailsProps> = () => (
    <>
        <Row>
            <Col span={6}>
                <ProductImage images={images}/>
                <ButtonsContainer/>
            </Col>
            <Col span={6}>
                <div style={{height: "100%"}}>
                    <ProductContents/>
                    <OptionTypes options={optionTypes}/>
                    <Delivery/>
                    <Synopsis/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <DetailedDescription/>
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <Specification/>
            </Col>
        </Row>
    </>
)

