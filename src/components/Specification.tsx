import React from "react"
import {Heading, Table} from "wix-style-react";

const data = [
    {
        type: 'In The Box', value: '\n' +
            'Handset, Earphone, USB Type-C cable, USB Power Adapter, SIM Ejector, Protective Case, Protective Film (applied), Documentation'
    },
    {type: 'Model Number', value: 'Vivo 1917/PD1921F_EX'},
    {type: 'SIM Type', value: 'Dual Sim'},
    {type: 'Display Size', value: '16.21 cm (6.38 inch)'},
    {type: 'Resolution', value: '2340 x 1080 Pixels'},
    {type: 'Display Type', value: 'Super AMOLED'},
    {type: 'Operating System', value: 'Android Pie 9'},
    {type: 'Processor Type', value: 'Qualcomm Snapdragon 712 AIE'},
    {type: 'Internal Storage', value: '64 GB'},
    {type: 'RAM', value: '6 GB'},
    {type: 'Primary Camera', value: '48MP + 8MP + 2MP'},
    {type: 'Secondary Camera', value: '32MP Front Camera'},
    {type: 'Battery Capacity', value: '4500 mAh'},
]

export interface SpecificationProps {
}

export const Specification: React.FC<SpecificationProps> = () =>
    <>
        <Heading appearance={"H2"}> Specification</Heading>
        <div style={{margin: "10px"}}>
            <Table
                data={data}
                skin="neutral"
                columns={[
                    {title: '', render: row => row.type},
                    {title: '', render: row => row.value},
                ]}
            >
                <Table.Content/>
            </Table>
        </div>
    </>
