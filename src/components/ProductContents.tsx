import React from "react"
import {Col, Row} from "wix-style-react";
import {ProductTitle} from "./ProductTitle";
import {ProductRating} from "./ProductRating";
import {ProductPrice} from "./ProductPrice";
import {Offers} from "./Offers";

export interface ProductContentsProps {
}

const offers = ["Bank Offer10% Instant Discount with HDFC Bank Credit Cards and Credit/Debit EMI Transactions",
    "Bank Offer10% Instant Discount with HDFC Bank Debit Card Transactions"];

export const ProductContents: React.FC<ProductContentsProps> = () => (
    <Row>
        <Col span={12}><ProductTitle/></Col>
        <Col span={12}><ProductRating rating={4}/></Col>
        <Col span={12}><ProductPrice sellingPrice={15990} mrp={19990}/></Col>
        <Col span={12}><Offers offers={offers}/></Col>
    </Row>
)
