import React from "react"
import { Global, css } from "@emotion/core"

export default ({ styles = `` }) => (
  <Global
    styles={css`
      @font-face {
        font-family: "Finlandica";
        src: url("fonts/finlandica-regular.eot");
        src: url("fonts/finlandica-regular.eot?#iefix")
            format("embedded-opentype"),
          url("fonts/finlandica-regular.woff2") format("woff2"),
          url("fonts/finlandica-regular.woff") format("woff"),
          url("fonts/finlandica-regular.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "Finlandica";
        src: url("fonts/finlandica-bold.eot");
        src: url("fonts/finlandica-bold.eot?#iefix") format("embedded-opentype"),
          url("fonts/finlandica-bold.woff2") format("woff2"),
          url("fonts/finlandica-bold.woff") format("woff"),
          url("fonts/finlandica-bold.ttf") format("truetype");
        font-weight: bold;
        font-style: normal;
      }

      html,
      body {
        font-family: Finlandica, sans-serif;
      }

      ${styles}
    `}
  />
)
