import React from "react"
import {Heading} from "wix-style-react";

export interface ProductPriceProps {
    mrp: number,
    sellingPrice: number
}

export const ProductPrice: React.FC<ProductPriceProps> = ({mrp, sellingPrice}: ProductPriceProps) =>
    <div style={{display: "flex", alignItems: "center", marginTop: "15px"}}>
        <Heading appearance="H2">&#8377;{sellingPrice}</Heading>
        {(mrp !== sellingPrice) && <Heading appearance="H4" style={{
            textDecoration: "line-through",
            marginLeft: "10px"
        }}>&#8377;{mrp}</Heading>}
    </div>
