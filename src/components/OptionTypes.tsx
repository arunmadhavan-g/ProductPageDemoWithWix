import React from "react"
import {Heading, Layout, Thumbnail} from "wix-style-react";

export interface OptionTypeProps {
    type: string;
    options: string[]
}

export interface OptionTypesProps {
    options: OptionTypeProps[]
}

const OptionType: React.FC<OptionTypeProps> = ({type, options}: OptionTypeProps) =>
    <div style={{margin:"10px 0"}}>
        <Heading appearance="H5">{type}</Heading>
        <Layout gap="10px" cols={8}>
            {options.map(option =>
                <Thumbnail
                    size="tiny"
                    selected={false}
                    title={option}
                />
            )}
        </Layout>

    </div>

export const OptionTypes: React.FC<OptionTypesProps> = ({options}: OptionTypesProps) =>
    <div>
        {options.map(option => <OptionType {...option} />)}
    </div>


