<h1 align="center">echo karriere frontend</h1>

<p align="center">
   <a href="https://github.com/echo-karriere/frontend/actions"><img alt="GitHub Actions Status" src="https://github.com/echo-karriere/frontend/workflows/Pipeline/badge.svg" /></a>
   <br />
</p>

<p align="center">
   <strong>Management portal for echo karriere</strong>
</p>

<details>
<summary>Table of Contents</summary>
<br />

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [Developing](#developing)
  - [Developing](#developing-1)
  - [`codegen`](#codegen)
  - [`test`](#test)
  - [React](#react)
- [LICENSE](#license)

<!-- markdown-toc end -->

</details>

## What

This is the backend that powers [echo karriere](https://www.echokarriere.no/)
for managing our events, content and data. It's a student developed project
written in TypeScript using React, MaterialUI and GraphQL.

# Developing

## Developing

To start developing simply run `yarn start` to start the development server.

## `codegen`

Since we're using GraphQL and TypeScript we use [GraphQL Code
Generator](https://graphql-code-generator.com/) to create types and hooks
automatically for us for typesafe development. If you need functionality on the
backend that isn't in `src/generated/types.ts` already run `yarn codegen` and
it'll regenerate your types and functions.

**NB:** This requires that the backend is running locally when running the command.

## `test`

To test our code run `yarn test`. You should also ensure that the code you've
written is up to spec with `yarn lint:ts` and `yarn lint:style`.

## React

This project was bootstrapped with [Create React
App](https://github.com/facebook/create-react-app). You can learn more in the
[Create React App
documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

# LICENSE

MIT.
