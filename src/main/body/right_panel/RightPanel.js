import React, { useState } from 'react';
import axios from 'axios';

import './right_panel.scss';
import Projects from './projects/Projects';
import GithubRepo from './github/GithubRepo';
import PanelSection from './section/PanelSection';
import data from 'data/data';

function RightPanel(props) {

  const [publicRepos, setPublicRepos] = useState(null);

  function getPublicRepositories() {
    axios.get(`https://api.github.com/users/${data.details.github.username}/repos`)
    .then(result => {
      const data = result.data.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });
      setPublicRepos(data);
    });
  }

  return (
    <div className="RightPanel-root">
      <Projects />
      <PanelSection title="Open Source">
        {publicRepos ? (
          <>
            {publicRepos.map((r, i) => (
              <GithubRepo key={i} name={r.name} link={r.html_url} />
            ))}
          </>
        ) : getPublicRepositories()}
      </PanelSection>
    </div>
  );
}

export default RightPanel;
