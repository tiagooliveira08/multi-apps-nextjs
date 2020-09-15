const assetPrefix = process.env.BUILDING_FOR_NOW ? "/apps/home" : "";

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
};
