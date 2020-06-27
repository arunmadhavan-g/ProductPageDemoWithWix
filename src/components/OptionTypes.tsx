import React from "react"
import {Heading, Layout, Thumbnail} from "wix-style-react";
import {OptionType} from "../models/Models";

export interface OptionTypeProps {
    type: string
    options: string[]
    selectedVal: string
}

export interface OptionTypesProps {
    options: OptionType[]
    currentOptions: { type: string, value: string }[]
}

const OptionType: React.FC<OptionTypeProps> = ({type, options, selectedVal}: OptionTypeProps) =>
    <div style={{margin: "10px 0"}}>
        <Heading appearance="H5">{type}</Heading>
        <Layout gap="10px" cols={8}>
            {options.map(option =>
                <Thumbnail
                    size="tiny"
                    selected={selectedVal === option}
                    title={option}
                />
            )}
        </Layout>

    </div>

export const OptionTypes: React.FC<OptionTypesProps> = ({options, currentOptions}: OptionTypesProps) =>
    <div>
        {options.map(option => <OptionType {...option}
                                           selectedVal={currentOptions.find(x => x.type === option.type).value}/>)}
    </div>


