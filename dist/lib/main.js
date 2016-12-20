"use strict";
const encryption = require("./encryption");
exports.isValidDigestAlgorithm = encryption.isValidDigestAlgorithm;
exports.hashPassword = encryption.hashPassword;
exports.comparePasswordWithHash = encryption.comparePasswordWithHash;
module.exports = encryption;
//# sourceMappingURL=main.js.map