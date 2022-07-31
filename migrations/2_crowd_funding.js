const Migrations = artifacts.require("crowd_funding");

module.exports = function (deployer) {
  deployer.deploy(Migrations,1000,100);
};
