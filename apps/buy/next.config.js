const assetPrefix = process.env.BUILDING_FOR_NOW ? "/apps/buy" : "";

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
};
