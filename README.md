# Microfrontends w/ Webpack5's Module Federation, React, and TypeScript

To get started, run `yarn` in both the `microfrontend` as well as the `shell` folder.

## Microfrontend

The `microfrontend` folder contains a standalone microfrontend that exposes its `<App>` component. To start this microfrontend, run `yarn start`.

## Shell

The `shell` folder contains a shell application that has a pointer to the remote microfrontend. It fetches the microfrontend's `<App>` at run-time and mounts it. To start it, run `yarn start`.
