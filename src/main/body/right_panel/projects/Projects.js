import React from 'react';

// Internal imports
import data from 'data/data';
import PanelSection from 'main/body/right_panel/section/PanelSection';
import ProjectItem from './item/ProjectItem';

function Projects(props) {
  return (
    <PanelSection title="Active Projects">
      {data.rightPanel.projects.map((p, i) => (
        <ProjectItem
          key={i}
          header={p.header}
          link={p.link}
          description={p.description}
        />
      ))}
    </PanelSection>
  );
}

export default Projects;
