import React from 'react'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import worksData from '../data/worksData'

import 'react-vertical-timeline-component/style.min.css'

function App() {
    return (
        <div className="work">
            <h1 className="title">Work - Timeline</h1>
            <VerticalTimeline>
                {worksData.map((element) => (
                    <VerticalTimelineElement key={element.key} date={element.date} dateClassName="date" iconStyle={{ background: element.color }}>
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {element.location}
                        </h5>
                        <p id="description">{element.description}</p>
                        <img src={element.img} alt="element" />

                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    )
}

export default App
