import React from 'react'
import { Global, css } from '@emotion/core'
import reset from 'emotion-reset'

export default ({ styles = ``}) => <Global styles={css`
  ${reset}
  ${styles}
`} />
