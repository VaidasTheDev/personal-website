
/*
  Sample object:
  {
    type: "<origin name>", (optional)
    link: "<website url>"
  }

  Icons will be picked based on 'type'.
  Valid values for 'type': linkedin, github, stackoverflow
*/

import githubDetails from 'main/data/details/github';

export default [
  {
    type: "linkedin",
    link: "https://www.linkedin.com/in/vaidas-vaitkevicius-52ab51b5/"
  },
  {
    type: "github",
    link: "https://github.com/" + githubDetails.username
  },
  {
    type: "stackoverflow",
    link: "https://stackoverflow.com/users/7389282/curiousdev"
  }
];
