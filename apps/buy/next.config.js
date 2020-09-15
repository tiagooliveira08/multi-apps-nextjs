const assetPrefix = process.env.BUILDING_FOR_NOW ? "/buy" : "";

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
};
