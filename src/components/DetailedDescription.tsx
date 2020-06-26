import React from "react"
import {Accordion, Heading, Image, MarketingLayout} from "wix-style-react";
import amoled from "../assets/amoled.png";
import battery from "../assets/battery.png";
import fingerprint from "../assets/fingerprint.png";
import flashCharge from "../assets/flashCharge.png";
import photo from "../assets/photo.png";

export interface DetailedDescriptionProps {
}

export const DetailedDescription: React.FC<DetailedDescriptionProps> = () =>
    <>
        <Heading appearance="H2">Product Features</Heading>
        <div style={{border: "1px solid #dfdfdf", marginTop: "10px"}}>
            <Accordion
                skin="light"
                items={[
                    {
                        title: 'Vivo FlashCharge',
                        children: (
                            <MarketingLayout
                                inverted
                                title="Vivo FlashCharge"
                                description="The Vivo Z1x is powered by Vivo’s proprietary FlashCharge technology. This Vivo exclusive 22.5 W FlashCharge lets you top up the mobile’s battery charge in a jiffy. With a Type-C charger, the Vivo Z1x gets a 3 hour talk time with a 5-minute charge."
                                size="medium"
                                image={<Image src={flashCharge}/>}
                            />
                        ),
                        collapseLabel: 'Less',
                    }, {
                        title: 'Vivo FlashCharge',
                        children: (
                            <MarketingLayout
                                title="Vivo FlashCharge"
                                description="The Vivo Z1x is powered by Vivo’s proprietary FlashCharge technology. This Vivo exclusive 22.5 W FlashCharge lets you top up the mobile’s battery charge in a jiffy. With a Type-C charger, the Vivo Z1x gets a 3 hour talk time with a 5-minute charge."
                                size="medium"
                                image={<Image src={flashCharge}/>}
                            />
                        ),
                        collapseLabel: 'Less',
                    }, {
                        title: 'Powerful Battery',
                        children: (
                            <MarketingLayout
                                inverted
                                title="Powerful Battery"
                                description="Underneath its innovative 2.5D designed cover, the Vivo Z1x houses a huge 4500 mAh battery. This large battery lets you enjoy all your multimedia content as well as makes your gaming an enjoyable experience."
                                size="medium"
                                image={<Image src={battery}/>}
                            />
                        ),
                        collapseLabel: 'Less',
                    }, {
                        title: 'Flash In-display Fingerprint Sensor',
                        children: (
                            <MarketingLayout
                                title="Flash In-display Fingerprint Sensor"
                                description="The Vivo Z1x gives you a stylish and better unlocking experience thanks to its advanced in-display fingerprint sensor. A single touch on the display of the Vivo Z1x swiftly unlocks the phone."
                                size="medium"
                                image={<Image src={fingerprint}/>}
                            />
                        ),
                        collapseLabel: 'Less',
                    }, {
                        title: 'Super AMOLED Halo FullView Display',
                        children: (
                            <MarketingLayout
                                inverted
                                title="Super AMOLED Halo FullView Display"
                                description="The Vivo Z1x comes with a 16.20 cm (6.38) Super AMOLED Halo FullView Display. This phone also comes with a 19.5:9 aspect ratio and a screen-to-body ratio of 90% that lets you have a visual treat of all your multimedia content without boundaries."
                                size="medium"
                                image={<Image src={amoled}/>}
                            />
                        ),
                        collapseLabel: 'Less',
                    }, {
                        title: 'For the Photography Enthusiast in You',
                        children: (
                            <MarketingLayout
                                title="For the Photography Enthusiast in You"
                                description="The Vivo Z1x comes with a set of impressive three AI camera configuration on the rear. The 48 MP middle camera in the three-camera configuration on the rear comes with a Sony IMX582 sensor and lets you take amazing shots. The 8 MP super wide-angle camera lets you take an expansive shot up to 120-degree. The 2 MP camera lets you take bokeh shots for those impressive portrait shots. It also comes with a 32 MP front camera that lets you take selfies with great clarity and details. The front camera also features various modes such as AI Face Beauty, HDR, AR Stickers, and more to make your selfie-taking experience enjoyable and fun."
                                size="medium"
                                image={<Image src={photo}/>}
                            />
                        ),
                        collapseLabel: 'Less',
                    },
                ]}
            />
        </div>
    </>
