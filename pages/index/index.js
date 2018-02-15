import React, { Fragment } from "react";
import { AnchorHeader, Contacts, Markdown, connect } from "components";
import ContactMini from "./ContactMini";

const Index = ({ page = {}, speakers }) => (
  <Fragment>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown source={page.intro} />
      </div>
      <aside className="intro--aside">
        <Markdown source={page.secondary} />
      </aside>
    </section>
    <AnchorHeader level={2}>Speakers</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts items={speakers} render={ContactMini} />
    </div>
    <AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="grid--full">
      <tito-widget event="react-finland/2018" />
    </div>
  </Fragment>
);

export default connect(`
{
  speakers {
    name, about, social { homepage, github, twitter, linkedin }, image
  }
  page(id: "index") {
    intro, secondary
  }
}
`)(Index);
