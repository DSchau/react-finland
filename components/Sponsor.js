import React from "react";

const SponsorContent = ({ about, image, name, props }) => (
  <img
    alt={name}
    className="sponsors--logo"
    src={require(`@react-finland/content-2018/images/${image}`)}
    {...props}
  />
);

const Sponsor = ({ name, about, social, image, logoProps }) => (
  <figure className="sponsors--item">
    {resolveSocialLink(social) ? (
      <a href={resolveSocialLink(social)} title={`${name}—${about}`}>
        <SponsorContent
          about={about}
          image={image}
          name={name}
          props={logoProps}
        />
      </a>
    ) : (
      <SponsorContent
        about={about}
        image={image}
        name={name}
        props={logoProps}
      />
    )}
  </figure>
);

function resolveSocialLink(social) {
  if (social.homepage) {
    return social.homepage;
  }

  if (social.twitter) {
    return `https://twitter.com/${social.twitter}`;
  }
}

export default Sponsor;
