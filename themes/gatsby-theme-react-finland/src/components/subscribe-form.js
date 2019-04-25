import React, { useState } from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Form = styled.form`
  margin: 1rem 0;
  :focus-within {
    button {
      background-color: rgba(255, 2555, 255, 1);
    }
    input {
      border-color: rgba(255, 255, 255, 1);
    }
  }
`

const Wrapper = styled.div`
  font-size: 24px;

  padding-top: 2em !important;
  padding-bottom: 2em !important;

  margin: 0 auto;
  text-align: center;
`

const Input = styled.input`
  flex: 1 auto;
  color: white;
  border: 2px solid transparent;
  border-right-width: 0;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 2555, 255, 0.25);
  outline: none;
  transition: border 0.25s;

  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`

const Button = styled.button`
  flex: 0 auto;
  font-weight: bold;
  color: #1863bd;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid transparent;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  transition: background 0.25s;

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`

const Subscribe = ({
  children = "Subscribe to get React Finland related news to your mail.",
}) => {
  const [email, setEmail] = useState(``)
  const disabled = email.length === 0
  return (
    <section>
      <Wrapper>
        <h2 className="subscribe--header">{children}</h2>

        <Form
          action="//react-finland.us16.list-manage.com/subscribe/post?u=a940d62db3f360204bf40b1c4&amp;amp;id=8c82fd10b8"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <Input
            type="email"
            placeholder="john@domain.com"
            name="EMAIL"
            id="mce-EMAIL"
            required={true}
            onChange={ev => setEmail(ev.target.value)}
            aria-label="email"
          />
          <div
            css={{
              display: "none",
              position: "absolute",
              left: "-5000px",
            }}
          >
            <input
              type="text"
              name="b_ed40c0084a0c5ba31b3365d65_b853b8e786"
              tabIndex="-1"
              value=""
              readOnly={true}
            />
          </div>
          <Button
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            css={disabled && {}}
            disabled={disabled}
          >
            Subscribe
          </Button>
        </Form>
      </Wrapper>
    </section>
  )
}
Subscribe.propTypes = {
  children: PropTypes.element,
}

export default Subscribe
