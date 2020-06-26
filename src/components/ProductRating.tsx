import React from "react"
import ReactStars from 'react-rating-stars-component'
import {Heading} from "wix-style-react";

export interface ProductRatingProps {
    rating: number
}

export const ProductRating: React.FC<ProductRatingProps> = ({rating}: ProductRatingProps) =>
    <div style={{display: "flex", alignItems: "center", marginTop: "5px"}}>
        <ReactStars
            value={rating}
            count={5}
            onChange={() => {
            }}
            size={18}
            color2={"#ffd700"}
        />
        <Heading style={{paddingLeft: "10px"}} appearance="H5">{rating} Ratings</Heading>
    </div>
