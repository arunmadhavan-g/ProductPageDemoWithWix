import React from "react"
import {Image, VerticalTabs} from "wix-style-react";

export interface ImageThumbsProps {
    images: string[]
    setImage: (image: string) => void
}

export const ImageThumbs: React.FC<ImageThumbsProps> = ({images, setImage}: ImageThumbsProps) => (
    <VerticalTabs size={"small"}>
        {images.map(image =>
            <VerticalTabs.TabItem>
                <Image
                    fit="contain"
                    src={image}
                    style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #dfdfdf",
                        padding: "5px 2px",
                        margin: "-12px 0"
                    }}
                    onClick={() => {
                        setImage(image)
                    }}
                />
            </VerticalTabs.TabItem>)}
    </VerticalTabs>
)


