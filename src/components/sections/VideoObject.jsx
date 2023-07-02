import React, { useState, useEffect } from "react";
import ControlBar from './ControlBar'
import VideoPlayer from "../elements/VideoPlayer";


export default function VideoObject(props) {

    const { direction, sectionNumber, psudoContent, content } = props

    const [video, setVideo] = useState(0)


    return (
        <section className={`video-object-container section-${sectionNumber}`}>
            {
                direction
                    ? (
                        <>
                            <ControlBar
                                sectionNumber={sectionNumber}
                                setVideo={setVideo}
                                video={video}
                                header={content.header}
                                subtitle={content.subheading}
                            />
                            <VideoPlayer video={video} />
                        </>
                    )
                    : (
                        <>
                            <VideoPlayer video={video} />
                            <ControlBar
                                sectionNumber={sectionNumber}
                                setVideo={setVideo}
                                video={video}
                                header={content.header}
                                subtitle={content.subheading}
                            />
                        </>
                    )
            }
            <style>
                {`
                    .section-${sectionNumber}>.control-bar-container::before {
                        content: '{0${sectionNumber}}. ${psudoContent}';
                        color: var(--hue);
                        display:block;
                        margin: 20px 0px;
                        opacity: 0.5;
                        font-size: 0.75rem;
                        text-transform: uppercase;
                        text-align: center;
                    }
                `}
            </style>
        </section>
    )
}