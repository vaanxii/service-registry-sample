const bunyan = require("bunyan");

// Load package.json
const pjs = require("../package.json");

// Get some meta info from the package.json
const { name, version } = pjs;

// Set up a logger
const getLogger = (serviceName, serviceVersion, level) =>
  bunyan.createLogger({
    name: serviceName,
    version: serviceVersion,
    level: level,
  });

// Configuration options for different environments
module.exports = {
  development: {
    name,
    version,
    serviceTimeout: 30,
    log: () => getLogger(name, version, "debug"),
  },
};
