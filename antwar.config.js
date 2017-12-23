const path = require("path");

module.exports = () => ({
  template: {
    title: "React Finland",
    file: path.resolve(__dirname, "templates/page.ejs"),
  },
  output: "build",
  layout: () => require("./layouts/SiteBody").default,
  paths: {
    "/": () => require("./layouts/SiteIndex").default,
    organizers: () => require("./layouts/OrganizerIndex").default,
    presentations: () => require("./layouts/PresentationIndex").default,
    schedule: () => require("./layouts/ScheduleIndex").default,
    speakers: () => require("./layouts/SpeakerIndex").default,
    workshops: () => require("./layouts/WorkshopIndex").default,
  },
});
