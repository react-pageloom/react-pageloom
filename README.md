<!-- markdownlint-disable-next-line -->
<p align="center">
  <a href="https://react-pageloom.github.io/react-pageloom/" rel="noopener" target="_blank"><img width="150" src="https://raw.githubusercontent.com/react-pageloom/react-pageloom/main/docs/src/assets/pl_logo.png" alt="react pageloom logo"></a>
</p>

<h1 align="center">React Pageloom</h1>

React PageLoom is a powerful and flexible library for creating stunning, interactive web page layouts with React.js. It provides a component-based system for building application interfaces, offering a unique and seamless way to enhance the user experience through dynamic navigation and visually appealing elements.

Each section, or "block", spans the entire viewport, effectively filling 100% of the screen's width and height. This approach simplifies the construction of immersive, one-page experiences where content is presented in distinct, full-screen sections that users can navigate through vertically.

## Documentation

You can see an example of a web page created using React PageLoom and full documentation of the package [here](https://react-pageloom.github.io/react-pageloom/).

## Example and Usage

Check out the [live demo](https://pageloom-example.netlify.app/) to see the result.

The following code creates a simple web page with a header, two blocks, and a footer. The navigation bar is automatically generated based on the blocks and their labels.

<details>
  <summary>Code Example</summary>

```tsx
import {
	Container,
	HeaderLogo,
	PageBlock,
	PageFooter,
	PageHeader,
	PageWrapper,
} from 'react-pageloom';

function App() {
	return (
		<PageWrapper
			sx={{
				fontFamily: 'Montserrat',
			}}
		>
			<PageHeader>
				<HeaderLogo>PageLoom Example</HeaderLogo>
				<Container>
					This is <code>PageHeader</code> with <code>Container</code>
				</Container>
			</PageHeader>
			<PageBlock id="block-1" label="PageBlock 1">
				<Container>
					<h1>
						This is <code>PageBlock</code> with <code>Container</code>
					</h1>
				</Container>
			</PageBlock>
			<PageBlock
				id="block-2"
				label="PageBlock 2"
				sx={{
					backgroundColor: 'lightblue',
				}}
			>
				<h1>
					This is <code>PageBlock</code> without <code>Container</code>
				</h1>
			</PageBlock>
			<PageFooter>
				<h1>
					This is the footer with <code>PageFooter</code>
				</h1>
			</PageFooter>
		</PageWrapper>
	);
}

export default App;
```

</details>

## What do you get?

Build the application by utilizing the following components: `PageHeader`, `PageBlock`, and `PageFooter`. The navigation component will be added automatically.
You can style each component using the `sx` prop or by using the custom classes that are added to each component. For all the classes check the documentation page.

<p align="center">
<img width="250" alt="image" src="https://github.com/react-pageloom/react-pageloom/assets/60644723/22484050-9b22-4ddb-b4fa-baa8aef5299c">
</p>

## Installation

If you use npm:

```bash
npm install react-pageloom
```

If you use yarn:

```bash
yarn add react-pageloom
```

## Features

- Component-based: Create layouts using various building blocks like `HeaderLogo`, `PageBlock`, `PageHeader`, `PageWrapper`, and `Container`.
- Smooth navigation: Integrated with `react-scroll` for an effortless scrolling experience.
- Scroll locking: Automatically focus on one block at a time while scrolling.
- Dynamic navigation bar: Navigation is automatically updated based on the currently active block and block components.
- Customization: Each component supports the `sx` prop for easy styling and has custom classes that you can style with CSS. For all the classes check the documentation page.

## Components

- `PageWrapper`: The outermost wrapper for your page.
- `PageHeader`: A special block that sits at the top of your page. Think of it as a Hero Page.
- `HeaderLogo`: Add to `PageHeader` to update the Logo for navbar.
- `PageBlock`: Use it to create distinct sections on your page. Each block occupies at least the height of your viewport.
- `Container`: An optional component that can be used inside blocks for centering content and maintaining a fixed width.

## Global Theme

React PageLoom offers a global theme that can be used to customize the appearance of the entire web page. The theme can be customized by passing a `theme` object to the `PageWrapper` component.
Check out the documentation page for more information.

```tsx
const myTheme = {
	// Example theme object
	colors: {
		text: '#243c5a', // Deep Sea Blue
		background: '#f9f871', // Sun Glow
		primary: '#e84a5f', // Flamenco Red
		secondary: '#ff8474', // Salmon Pink
		navBackground: '#2a363b', // Swell Gray
		navText: '#fecea8', // Peach Orange
		activeLink: '#fe8a71', // Bittersweet
		hoverLink: '#e84a5f', // Flamenco Red
		mobileMenuBackground: '#2a363b', // Swell Gray
	},
};

<PageWrapper theme={myTheme}>...</PageWrapper>;
```

## Contributing

We appreciate all contributions. To contribute, please fork the repository and create a new branch for each feature or bugfix. Then, submit a pull request with a detailed description of your changes.

## License

React PageLoom is [MIT licensed](./LICENSE).

For more information, please visit our [documentation](https://react-pageloom.github.io/react-pageloom/).
