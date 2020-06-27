import React, {useState} from "react"
import {Button, FormField, Input, Badge} from "wix-style-react";
import * as Icon from 'react-bootstrap-icons';

export interface DeliveryProps {
    status: boolean,
    getStatus: (zipCode: string) => boolean
}

export const Delivery: React.FC<DeliveryProps> = ({status, getStatus}: DeliveryProps) => {
    const [currentStatus, setCurrentStatus] = useState(status);
    const [zipCode, setZipCode] = useState(null);
    const updateStatus = async () => {
        setCurrentStatus(await getStatus(zipCode));
    }


    return <div style={{margin: "10px 0", display: "flex", alignItems: "flex-end"}}>
        <FormField label="Pincode">
            <Input size={"small"} maxLength={8} onChange={e => setZipCode(e.target.value)}/>
        </FormField>
        <Button size={"small"} style={{marginLeft: "10px"}} onClick={updateStatus}>Check Availability</Button>
        <div style={{marginBottom: "3px", marginLeft: "15px"}}>
            {currentStatus && <Badge skin="success" size="medium" prefixIcon={<Icon.Check/>}> Available </Badge>}
            {!currentStatus && <Badge skin="danger" size="medium" prefixIcon={<Icon.XCircle/>}> UnAvailable </Badge>}
        </div>
    </div>;
}
