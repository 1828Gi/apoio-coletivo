module.exports = {
  extends: ['expo', 'plugin:react/recommended'],
  env: {
    'node': true,
  },
  rules: {
    'react/prop-types': ['error', { 'ignore': ['navigation'] }],
  },
};
