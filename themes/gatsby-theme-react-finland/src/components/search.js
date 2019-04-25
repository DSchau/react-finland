import React from "react"
import { MdSearch } from "react-icons/md"

import Searchbar from "@dschau/gatsby-theme-search/components/search-bar"

export default function Search({ className }) {
  return (
    <Searchbar
      children={({ toggled, onClick }) => (
        <div className={className}>
          <MdSearch size={32} color="white" onClick={onClick} />
        </div>
      )}
    />
  )
}
