
// Personal account details i.e. GitHub username for now
import github from './details/github';

// Banner
import info from './banner/info';
import buttons from './banner/buttons';

// Body
import sections from './sections';

// Panel on the right
import projects from './projects';

const data = {
  banner: {
    info,
    buttons
  },
  body: {
    sections
  },
  rightPanel: {
    projects
  },
  details: {
    github
  }
};

export default data;
