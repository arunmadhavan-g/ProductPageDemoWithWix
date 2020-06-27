import React from "react"
import {Heading, Breadcrumbs} from "wix-style-react";

export interface ProductTitleProps {
    title: string;
    breadcrumbs: string[]
}

export const ProductTitle: React.FC<ProductTitleProps> = ({breadcrumbs, title}: ProductTitleProps) =>
    <div>
        <Breadcrumbs
            activeId="3"
            items={breadcrumbs.map((x, index) => ({id: index, value: x}))}
            onClick={() => {
            }}
        />
        <Heading appearance="H3">{title}</Heading>
    </div>

