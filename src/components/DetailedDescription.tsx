import React from "react"
import {Accordion, Heading, Image, MarketingLayout} from "wix-style-react";


export interface DetailedDescriptionProps {
    features: { title: string, description: string, image: string }[]
}

export const DetailedDescription: React.FC<DetailedDescriptionProps> = ({features}: DetailedDescriptionProps) => {
    const items = features.map((feature, index) => ({
        title: feature.title,
        collapseLabel: 'Less',
        children:
            (
                <MarketingLayout
                    inverted={index % 2 === 0}
                    title={feature.title}
                    size="medium"
                    description={feature.description}
                    image={<Image src={feature.image}/>}
                />
            )
    }))
    return <>
        <Heading appearance="H2">Product Features</Heading>
        <div style={{border: "1px solid #dfdfdf", marginTop: "10px"}}>
            <Accordion
                skin="light"
                items={items}
            />
        </div>
    </>;
}
