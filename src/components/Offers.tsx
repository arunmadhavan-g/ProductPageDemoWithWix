import React from "react"
import {Text, Heading, InfoIcon} from "wix-style-react";
import * as Icon from 'react-bootstrap-icons';

export interface OffersProps {
    offers: string[]
}

export const Offers: React.FC<OffersProps> = ({offers}: OffersProps) => {
    if (offers && offers.length > 0)
        return (<div style={{marginTop: "20px"}}>
            <Heading appearance="H5" style={{textTransform: "uppercase"}}>Offers Available</Heading>
            {offers.map((offer: string) =>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Icon.Tag/>
                    <Text size={"small"} style={{
                        width: "500px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        margin: "0 5px"
                    }}>{offer}</Text>
                    <InfoIcon size="medium" content={offer}/>
                </div>
            )}
        </div>)

    return <></>
}
