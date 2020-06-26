import React from "react"
import {Text, FormField} from "wix-style-react";

export interface SynopsisProps {
}

export const Synopsis: React.FC<SynopsisProps> = () =>
    <div style={{margin: "10px 0"}}>
        <FormField label="Description" >
            <Text size="small">
                The Vivo Z1x is designed for the gamers and photography enthusiasts. With a huge 4,500 mAh battery that
                can be charged using Vivo’s proprietary FlashCharge technology, you get a 3 hour talk time on a 5-minute
                charge. Apart from the huge battery that lets it be your workhorse for a complete day, the Vivo Z1x also
                comes with a super AMOLED Halo Full View display. This large 16.20 cm (6.38) screen comes with a 19.5:9
                aspect ratio and a screen-to-body ratio of 90% for that immersive viewing experience. It also comes with
                a Flash In-display fingerprint sensor that unlocks your phone swiftly. It features a triple camera setup
                (48 MP Main Camera, 8 MP Super Wide-Angle Camera, and 2 MP Depth Camera) and one 32 MP front-facing
                camera, the Vivo Z1x lets you take stunning photographs. It is powered by the powerful Snapdragon
                processor and comes with a number of turbo modes that help in the seamless multitasking capabilities of
                this phone.
            </Text>
        </FormField>
    </div>
