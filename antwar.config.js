const path = require("path");
const EVENT_NAME = "React Finland";

module.exports = {
  apiUrl: "http://localhost:4000/graphql", // "https://api.react-finland.fi/graphql",
  conferenceId: "react-finland-2019",
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
    context: {
      helmet: {},
    },
  },
  renderPage: require("./utils/render-page"),
  output: "build",
  layout: () => require("./layouts/SiteBody").default,
  paths: {
    "404.html": page("404", {
      description: "Page was not found",
      title: "Page not found",
    }),
    "/": page("index", {
      title: EVENT_NAME,
      description: `${EVENT_NAME} (24-26.04.2019, Helsinki) is a conference that comes with a workshop day and two days of talks.`,
    }),
    "2018": page("2018", {
      description: "React Finland 2018",
      title: "React Finland 2018",
    }),
    "for-attendees": page("for-attendees", {
      title: "For Attendees",
      description: `What should I know as a ${EVENT_NAME} attendee`,
    }),
    "for-sponsors": page("for-sponsors", {
      title: "For Sponsors",
      description: `What should I know as a ${EVENT_NAME} sponsor?`,
    }),
    about: page("about", {
      title: "Organizers",
      description: `Who is organizing ${EVENT_NAME}?`,
    }),
    imprint: page("imprint", {
      title: "Imprint",
      description: `How to reach ${EVENT_NAME} organizers?`,
    }),
    "privacy-policy": page("privacy-policy", {
      title: "Privacy Policy",
      description: `What is the privacy policy of ${EVENT_NAME}?`,
    }),
    "2018/schedule": page("schedule", {
      title: "Schedule",
      description: `What is the schedule of ${EVENT_NAME}?`,
    }),
    "2018/speakers": page("speakers", {
      title: "Speakers",
      speakers: `Who is going to speak at ${EVENT_NAME}?`,
    }),
    "2018/workshops": page("workshops", {
      title: "Workshops",
      description: `Which workshops will be held at ${EVENT_NAME}?`,
    }),
  },
};

function page(name, meta = {}) {
  const ret = () => {
    const pageComponent = require(`./pages/${name}`).default;

    pageComponent.description = meta.description;
    pageComponent.title = meta.title;

    return pageComponent;
  };

  ret.name = name;

  return ret;
}
