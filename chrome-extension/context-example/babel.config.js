/** @type {import('@babel/core').TransformOptions} */
const config = {
  presets: [
    {
      'preset-react': {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    },
  ],
  plugins: ['@emotion/babel-plugin'],
}

module.exports = config
