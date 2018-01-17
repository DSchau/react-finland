import React from "react";
import { Navigation } from "@survivejs/components";
import { content } from "@react-finland/content-2018";
import navigationPages from "./navigation-pages";
import {
  AnchorContext,
  AnchorHeader,
  Contacts,
  ContactMini,
  Header,
  Markdown,
  SocialLinks,
} from "../components";

const { partners, goldSponsors, silverSponsors, bronzeSponsors } = content;

import "normalize.css/normalize.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
import "../styles/style.less";

const SiteBody = ({ children, section, location: { pathname } }) => (
  <AnchorContext>
    <main>
      <section className="frontpage">
        <Header pathname={pathname} logo={require("assets/img/logo.png")} />
        <div className="main-container container">
          <section className="post-block-wrap">
            <div className="post-block post-block-full" id="social">
              <SocialLinks />
            </div>
            {children}
            <div className="post-block post-block-full" id="social2">
              <SocialLinks />
            </div>
            <div className="post-block post-block-full">
              <AnchorHeader level={2}>Gold Sponsors</AnchorHeader>
              {goldSponsors.length ? (
                <Contacts
                  className="gold sponsors"
                  items={goldSponsors}
                  render={ContactMini}
                />
              ) : (
                <a href="/for-sponsors/">Become a sponsor</a>
              )}
              <AnchorHeader level={2}>Silver Sponsors</AnchorHeader>
              {silverSponsors.length ? (
                <Contacts
                  className="silver sponsors"
                  items={silverSponsors}
                  render={ContactMini}
                />
              ) : (
                <a href="/for-sponsors/">Become a sponsor</a>
              )}
              <AnchorHeader level={2}>Bronze Sponsors</AnchorHeader>
              {bronzeSponsors.length ? (
                <Contacts
                  className="bronze sponsors"
                  items={bronzeSponsors}
                  render={ContactMini}
                />
              ) : (
                <a href="/for-sponsors/">Become a sponsor</a>
              )}
              <AnchorHeader level={2}>Partners</AnchorHeader>
              <Contacts
                className="partners"
                items={partners}
                render={ContactMini}
              />
            </div>
          </section>
        </div>
      </section>

      <Navigation pathname={pathname} pages={navigationPages} />
    </main>
  </AnchorContext>
);

export default SiteBody;
