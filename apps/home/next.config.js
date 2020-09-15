const assetPrefix = process.env.BUILDING_FOR_NOW ? "/apps/home" : "";

module.exports = {
  transpileModules: ["./../components"],
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
  webpack(config, { dev }) {
    config.module.rules.forEach((rule) => {
      console.log(rule);
      const ruleContainsTs =
        rule.test && rule.test.toString().includes("ts|tsx");

      if (
        ruleContainsTs &&
        rule.use &&
        rule.use.loader === "next-babel-loader"
      ) {
        rule.include = undefined;
      }
    });
    return config;
  },
};
