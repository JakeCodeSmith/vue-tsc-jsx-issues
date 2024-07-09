# vue-tsc JSX Issues

**Demonstrate JSX issues with vue-tsc when React installed**

## Running the project

Install dependencies with NPM:

```shell
npm ci
```

Run type-checking with:

```shell
npm test
```

## Where are the issues?

In `src/Example.vue` there is an error on line 4 where the `@click` handler is expecting type `MouseEventHandler<HTMLButtonElement>` (which comes from React).

In `src/Example2.vue` there is _no_ type error on line 6 where incorrect types are used for the `:ref` handler (instead it expects the types of React's `ref`).

If I understand correctly, these template should not be being treated as JSX.

We cannot do anything about the React types being installed as these are (probably incorrectly) a child dependency of `@storybook/addon-essentials` and `@storybook/blocks`.
