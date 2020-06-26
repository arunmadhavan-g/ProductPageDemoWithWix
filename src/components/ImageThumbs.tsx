import React from "react"
import {Image, VerticalTabs} from "wix-style-react";
import vivoFront from "../assets/vivo-front.png";
import vivoBack from "../assets/vivo-back.png";
import vivoLeft from "../assets/vivo-left.png";
import vivoRight from "../assets/vivo-right.png";

export interface ImageThumbsProps {
}

const images = [vivoFront, vivoRight, vivoBack, vivoLeft];

export const ImageThumbs: React.FC<ImageThumbsProps> = () => (
    <VerticalTabs size={"small"}>
        {images.map(image =>
            <VerticalTabs.TabItem>
                <Image fit="contain" src={image} style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #dfdfdf",
                    padding: "5px 2px",
                    margin: "-12px 0"
                }}/>
            </VerticalTabs.TabItem>)}
    </VerticalTabs>
)


