const assetPrefix = process.env.BUILDING_FOR_NOW ? "/magazine" : "";

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
};
