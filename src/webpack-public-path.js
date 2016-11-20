// Dynamically set the webpack public path at runtime below
// This magic global is used by webpack to set the public path at runtime.
// The public path is set dynamically to avoid a lot of issues
// Documentation: http://webpack.github.io/docs/configuration.html#output-publicpath
// eslint-disable-next-line no-undef
__webpack_public_path__ = window.location.protocol + "//" + window.location.host + "/";
