import worksData from "../data/worksData";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {

  return (
    <div className="work">
      <h1 className="title">Work</h1>
      <VerticalTimeline>
        {worksData.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              icon = {element.icon}
              color= {element.color}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>

              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>

              <p id="description">{element.description}</p>

            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;
