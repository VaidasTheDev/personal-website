
const sgdigitalListItems = [
  "Working in a product team with agile methodologies",
  "Delivering brand new features and providing support",
  "Own a front-end AngularJS / React component"
];

const universityListItems = [
  "Programming I-III (focus on Java), Cloud Application Development, Game Design and Development",
  "Algorithmics, Intelligent Systems, Data Management",
  "Software Modelling & Design, Programming Language Concepts & Interaction Design"
];

const projectTopfindListItems = [
  "Developed multiple web scrapping applications with JSOUP for gathering publicly available data",
  "Created a Spring application for gathering data using web scrappers and updating it in the database periodically",
  "API written using Java and Spring Boot"
];

const sgdigitalChips = [
  {
    label: "Java 8",
    type: "primary"
  },
  {
    label: "Spring",
    type: "primary"
  },
  {
    label: "JavaScript",
    type: "secondary"
  },
  {
    label: "React",
    type: "secondary"
  },
  {
    label: "Apache Cassandra",
    type: "secondary"
  }
];

const topfindChips = [
  {
    label: "Java 13",
    type: "primary"
  },
  {
    label: "Spring",
    type: "primary"
  },
  {
    label: "JavaScript",
    type: "primary"
  },
  {
    label: "React",
    type: "primary"
  },
  {
    label: "Mapbox",
    type: "secondary"
  },
  {
    label: "PostgreSQL 11",
    type: "secondary"
  }
];

const sections = [
  {
    header: "Experience",
    items: [
      {
        header: "Software Engineer",
        subheader: "S.G. Digital",
        meta: "09/2018 - Present",
        listItems: sgdigitalListItems,
        chips: sgdigitalChips
      }
    ]
  },
  {
    header: "Projects",
    items: [
      {
        header: "TopFind",
        meta: "10/2019 - Present",
        description: "An interactive map application for finding most profitable regions in UK for buying real estate to let.",
        listItems: projectTopfindListItems,
        chips: topfindChips
      }
    ]
  },
  {
    header: "Education",
    items: [
      {
        header: "BSc Computer Science",
        subheader: "University of Southampton",
        meta: "2015 - 2018",
        description: "Degree topics include:",
        listItems: universityListItems
      }
    ]
  },
];

export default sections;
