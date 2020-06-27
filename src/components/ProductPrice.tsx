import React from "react"
import {Heading} from "wix-style-react";

export interface ProductPriceProps {
    price: {
        mrp: number,
        sellingPrice: number
    }
}

const formatPrice = (price: number) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
}).format(price)

export const ProductPrice: React.FC<ProductPriceProps> = ({price}: ProductPriceProps) =>
    <div style={{display: "flex", alignItems: "center", marginTop: "15px"}}>
        <Heading appearance="H2">{formatPrice(price.sellingPrice)}</Heading>
        {(price.mrp !== price.sellingPrice) && <Heading appearance="H4" style={{
            textDecoration: "line-through",
            marginLeft: "10px"
        }}>{formatPrice(price.mrp)}</Heading>}
    </div>
