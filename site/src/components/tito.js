import React from 'react'
import styled from '@emotion/styled'

const Widget = styled.div`
.tito-wrapper {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  font-family: inherit;
}

.tito-ticket.row {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  margin: 0 !important;
  border-bottom-color: #efefef !important;
}

.tito-ticket-name-wrapper {
  width: 75%;
}

.tito-ticket-price-quantity-wrapper {
  width: 20%;
}

.tito-ticket-price-quantity {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

.tito-previous .tito-ticket-name-wrapper {
  text-decoration: line-through;
  color: #888;
}

.tito-badge-link {
  display: none;
}

.tito-tickets-remaining {
  display: table !important;
  margin-left: initial !important;
  margin-top: 1.5% !important;
  padding: $pu $pu2 !important;
  border: none !important;
  border-radius: 3rem !important;
}

.tito-submit-wrapper {
  margin: $pu * 4 0 0;
}

.tito-submit {
  padding: 0.5em 2em !important;
  font-family: $fh;
  font-size: 1em !important;
  background-color: $color-accent !important;
  border: none !important;
  border-radius: 3rem !important;
  height: auto !important;
  width: auto !important;
  &:hover {
    background-color: lighten($color-accent, 10%) !important;
  }
}
`

export default function Tito({ children = `Loading. Patience my padawan!`, event }) {
  return (
    <Widget>
      <tito-widget event={event}>
        {children}
      </tito-widget>
    </Widget>
  )
}
