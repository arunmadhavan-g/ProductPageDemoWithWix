import React from "react"
import {Heading, Breadcrumbs} from "wix-style-react";

export interface ProductTitleProps {
}

export const ProductTitle: React.FC<ProductTitleProps> = () =>
    <div>
        <Breadcrumbs
            activeId="3"
            items={[
                {id: '1', value: 'Home'},
                {id: '2', value: 'Mobiles'},
                {id: '3', value: 'Vivo'},
                {id: '3', value: 'Vivo Z1x'},
            ]}
            onClick={() => {
            }}
        />
        <Heading appearance="H3">Vivo Z1x (Fusion Blue, 64 GB) (6 GB RAM)</Heading>
    </div>

