import React from "react"
import {Heading, Table} from "wix-style-react";

export interface SpecificationProps {
    specs: { type: string, value: string }[]
}

export const Specification: React.FC<SpecificationProps> = ({specs}: SpecificationProps) =>
    <>
        <Heading appearance={"H2"}> Specification</Heading>
        <div style={{margin: "10px"}}>
            <Table
                data={specs}
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
