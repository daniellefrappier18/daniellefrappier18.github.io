module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@uxf/storybook-addon-usage-guide',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  managerWebpack: async (config) => {
    const filteredRules = config.module.rules.filter((rule) => {
      if (!rule.test || typeof rule.test.test !== 'function') {
        return true;
      }
      return !rule.test.test('.mdx');
    });
    const updatedRules = [
      ...filteredRules,
      {
        test: /\.usage-guide\.mdx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          '@mdx-js/loader',
        ],
      },
    ];
    config.module.rules = updatedRules;

    return config;
  },
};