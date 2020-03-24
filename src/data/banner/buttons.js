
/*
  Sample object:
  {
    type: "<origin name>"
    link: "<website url>" (required)
    label: "<text_label>" (required)
  }

  Icons will be picked based on 'type'.
  Valid values for 'type': linkedin, github, stackoverflow
*/

import githubDetails from 'data/details/github';

export default [
  {
    type: "linkedin",
    link: "https://www.linkedin.com/in/vaidas-vaitkevicius-52ab51b5/",
    label: "LinkedIn"
  },
  {
    type: "github",
    link: "https://github.com/" + githubDetails.username,
    label: "GitHub"
  },
  {
    type: "stackoverflow",
    link: "https://stackoverflow.com/users/7389282/curiousdev",
    label: "Stack Overflow"
  }
];
