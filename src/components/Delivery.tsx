import React from "react"
import {Button, FormField, Input} from "wix-style-react";

export interface DeliveryProps {
}

export const Delivery: React.FC<DeliveryProps> = () =>
    <div style={{margin: "10px 0", display: "flex", alignItems: "flex-end"}}>
        <FormField label="Pincode">
            <Input size={"small"} maxLength={8}/>
        </FormField>
        <Button size={"small"} style={{marginLeft: "10px"}}>Check Availability</Button>
    </div>
