const React = require("react"); // XXX: imports aren't transpiled in Node
const Markdown = require("./Markdown");
const Keywords = require("./Keywords");
const slugify = require("./slugify");

const SpeakerNames = ({ speakers = [] }) => (
  <div className="speaker-names">
    {speakers.map(({ name }, i) => [
      speakers.length > 1 && i === speakers.length - 1 ? (
        <span> and </span>
      ) : (
        undefined
      ),
      <a className="speaker-name" key={i} href={`/speakers/#${slugify(name)}`}>
        {name}
      </a>,
    ])}
  </div>
);

const Schedule = ({ items: { intervals } }) => (
  <dl className="schedule">
    {intervals.map(({ begin, end, sessions }) => [
      <dt>
        {begin} - {end}
      </dt>,
      <dd>
        {sessions.map(({ title, description, speakers, keywords }) => [
          <h3>
            {title} {title && speakers && "-"}{" "}
            <SpeakerNames speakers={speakers} />
          </h3>,
          <Markdown source={description || "Not announced yet."} />,
          keywords && <Keywords items={keywords} />,
        ])}
      </dd>,
    ])}
  </dl>
);

module.exports = Schedule;
