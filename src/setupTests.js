// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
require('@testing-library/jest-dom');
// Compatibility shim: testing-library/react expects ReactDOM.render/unmountComponentAtNode
// to exist for older React versions. React 18+/19 use createRoot API. Provide shims
// that map render/unmountComponentAtNode to react-dom/client createRoot/unmount.
try {
	// eslint-disable-next-line import/no-extraneous-dependencies
	const ReactDOM = require('react-dom');
	// eslint-disable-next-line import/no-extraneous-dependencies
	const ReactDOMClient = require('react-dom/client');

	if (!ReactDOM.render && ReactDOMClient && typeof ReactDOMClient.createRoot === 'function') {
		const roots = new Map();

		ReactDOM.render = (element, container) => {
			if (!container) return;
			let root = roots.get(container);
			if (!root) {
				root = ReactDOMClient.createRoot(container);
				roots.set(container, root);
			}
			root.render(element);
		};

		ReactDOM.unmountComponentAtNode = (container) => {
			const root = roots.get(container);
			if (root) {
				root.unmount();
				roots.delete(container);
				return true;
			}
			return false;
		};
	}
} catch (e) {
	// not fatal for tests — leave default behavior
}
