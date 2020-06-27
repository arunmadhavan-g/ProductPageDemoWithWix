import React from "react"
import {Heading, Layout, Thumbnail} from "wix-style-react";
import {OptionType} from "../models/Models";

export interface OptionTypeProps {
    type: string
    options: string[]
    selectedVal: string
    currentOptions: { type: string, value: string }[]
    changeOptions: (type: string, value: string, currentOptions: { type: string, value: string }[]) => void
}

export interface OptionTypesProps {
    options: OptionType[]
    currentOptions: { type: string, value: string }[]
    changeOptions: (type: string, value: string, currentOptions: { type: string, value: string }[]) => void
}

const OptionType: React.FC<OptionTypeProps> = ({type, options, selectedVal, currentOptions, changeOptions}: OptionTypeProps) =>
    <div style={{margin: "10px 0"}}>
        <Heading appearance="H5">{type}</Heading>
        <Layout gap="10px" cols={8}>
            {options.map(option =>
                <Thumbnail
                    size="tiny"
                    selected={selectedVal === option}
                    title={option}
                    onClick={() => changeOptions(type, option, currentOptions)}
                />
            )}
        </Layout>

    </div>

export const OptionTypes: React.FC<OptionTypesProps> = ({options, currentOptions, changeOptions}: OptionTypesProps) =>
    <div>
        {options.map(option => <OptionType {...option} changeOptions={changeOptions} currentOptions={currentOptions}
                                           selectedVal={currentOptions.find(x => x.type === option.type).value}/>)}
    </div>


