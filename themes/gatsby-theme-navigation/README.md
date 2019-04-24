# @dschau/gatsby-theme-navigation

_Note: these helpers were created as a demo for React Finland. Instructions below may not be entirely accurate._

A utility to simplify the creation of navigation helpers, e.g. a list of navigation items and/or a bread crumb menu.

## Install

```shell
npm install @dschau/gatsby-theme-navigation
```

## Usage

This plugin exposes two ways to create navigation items. `yaml` driven and `gatsby-config.js` driven. The end result of both paths is that a type `SiteNavigation` will be created, which can then be queried against by the exposed visual components.
