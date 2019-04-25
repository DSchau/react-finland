import React from "react"
import styled from "@emotion/styled"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

const Container = styled.ul`
  margin: 0.25rem 0;

  li:first-of-type {
    padding-left: 0;
    margin-left: 0;
  }
`

const Item = styled.li`
  display: inline-block;
  list-style-type: none;

  padding: 0.25rem 0.5rem;
  margin: 0.5rem;
`

const getIcon = href => {
  if (href.match("twitter")) {
    return FaTwitter
  } else if (href.match("github")) {
    return FaGithub
  } else if (href.match("linkedin")) {
    return FaLinkedin
  }

  return null
}

export default function Social({ twitter, github, linkedin, homepage }) {
  const all = [homepage, twitter, github, linkedin].filter(Boolean)

  return (
    <Container>
      {all.map(href => {
        const Icon = getIcon(href)
        return (
          <Item key={href}>
            <a
              css={{ fontSize: 18, color: `#002fa9`, textDecoration: `none` }}
              href={href}
            >
              {Icon ? <Icon /> : href}
            </a>
          </Item>
        )
      })}
    </Container>
  )
}
