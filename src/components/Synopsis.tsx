import React from "react"
import {Text, FormField} from "wix-style-react";

export interface SynopsisProps {
    content: string
}

export const Synopsis: React.FC<SynopsisProps> = ({content}: SynopsisProps) =>
    <div style={{margin: "10px 0"}}>
        <FormField label="Description">
            <Text size="small">{content}</Text>
        </FormField>
    </div>
