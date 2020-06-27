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
import {productDetails, variantDetails} from "../data/ProductData";

export interface ProductDetailsProps {
}

const getDeliveryStatus = (zipCode: string): boolean => zipCode === '600004';

export const ProductDetails: React.FC<ProductDetailsProps> = () => (
    <>
        <Row>
            <Col span={6}>
                <ProductImage images={variantDetails.images}/>
                <ButtonsContainer/>
            </Col>
            <Col span={6}>
                <div style={{height: "100%"}}>
                    <ProductContents variantDetails={variantDetails} productDetails={productDetails}/>
                    <OptionTypes options={productDetails.optionTypes} currentOptions={variantDetails.currentOptions}/>
                    <Delivery status={false} getStatus={getDeliveryStatus}/>
                    <Synopsis content={productDetails.synopsis}/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <DetailedDescription features={productDetails.features}/>
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <Specification specs={productDetails.specs}/>
            </Col>
        </Row>
    </>
)

