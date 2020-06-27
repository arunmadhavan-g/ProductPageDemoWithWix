import React from "react"
import {Col, Row} from "wix-style-react";
import {ProductTitle} from "./ProductTitle";
import {ProductRating} from "./ProductRating";
import {ProductPrice} from "./ProductPrice";
import {Offers} from "./Offers";
import {ProductDetails, VariantDetails} from "../models/Models";

export interface ProductContentsProps {
    variantDetails: VariantDetails,
    productDetails: ProductDetails
}

export const ProductContents: React.FC<ProductContentsProps> = ({variantDetails, productDetails}: ProductContentsProps) => (
    <Row>
        <Col span={12}><ProductTitle breadcrumbs={productDetails.breadcrumbs} title={variantDetails.title}/></Col>
        <Col span={12}><ProductRating rating={variantDetails.rating}/></Col>
        <Col span={12}><ProductPrice price={variantDetails.price}/></Col>
        <Col span={12}><Offers offers={productDetails.offers}/></Col>
    </Row>
)
