# React PageLoom

React PageLoom is a powerful and flexible library for creating stunning, interactive web page layouts with React.js. It provides a component-based system for building application interfaces, offering a unique and seamless way to enhance the user experience through dynamic navigation and visually appealing elements.

Each section, or "block", spans the entire viewport, effectively filling 100% of the screen's width and height. This approach simplifies the construction of immersive, one-page experiences where content is presented in distinct, full-screen sections that users can navigate through vertically.

## Installation

```bash
npm install react-pageloom
```
```bash
yarn add react-pageloom
```

## Usage

```jsx
import {
	HeaderLogo,
	PageBlock,
	PageHeader,
	PageWrapper,
	Container,
} from 'react-pageloom';

function App() {
  return (
    <PageWrapper>
      <PageHeader>Header Content</PageHeader>
      <PageBlock id="block1">Block 1 Content</PageBlock>
      <PageBlock id="block2">Block 2 Content</PageBlock>
    </PageWrapper>
  );
}

export default App;
```

## Features

- Component-based: Create layouts using various building blocks like `HeaderLogo`, `PageBlock`, `PageHeader`, `PageWrapper`, and `Container`.
- Smooth navigation: Integrated with `react-scroll` for an effortless scrolling experience.
- Scroll locking: Automatically focus on one block at a time while scrolling.
- Dynamic navigation bar: Updates based on the currently active block.
- Customization: Each component supports the `sx` prop for easy styling and has custom classes that you can style with CSS.

## Components

- `HeaderLogo`: Add to `PageHeader` to update the Logo for navbar.
- `PageBlock`: Use it to create distinct sections on your page.
- `PageHeader`: A special block that sits at the top of your page.
- `PageWrapper`: The outermost wrapper for your page.
- `Container`: An optional component that can be used inside blocks for centering content and maintaining a fixed width.


## Example

You can see an example of a web page created using React PageLoom at [TBD](#).

## Contributing

We appreciate all contributions. To contribute, please fork the repository and create a new branch for each feature or bugfix. Then, submit a pull request with a detailed description of your changes.

## License

React PageLoom is [MIT licensed](./LICENSE).

For more information, please visit our [documentation](#).
