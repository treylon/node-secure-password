import * as encryption from './encryption';

export const hashPassword = encryption.hashPassword;
export const comparePasswordWithHash = encryption.comparePasswordWithHash;

module.exports = encryption;
