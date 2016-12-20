"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const crypto_1 = require("crypto");
/**
 * Default salt length
 */
const SALT_LENGTH = 64;
/**
 * Default password hash length
 */
const PASSWORD_HASH_LENGTH = 128;
/**
 * Default amount of re-hash iterations
 */
const ITERATIONS = 25000;
/**
 * Default digest to use for hashing
 */
const DIGEST = 'sha512';
/**
 * Hashes password with the given options and returns a password
 * storage literal of the format: "SALT:ITERATIONS:DIGEST:PASSWORD_HASH"
 *
 * @param   {object}    param
 * @param   {string}    param.password - Plain Password to hash
 * @param   {string?}   param.salt - Salt for hashing
 * @param   {string?}   param.iterations - Amount of re-hash operations
 * @param   {string?}   param.digest - Digest to use for hashing
 * @param   {string?}   param.passwordHashLength - Length of hashed password in characters
 * @param   {string?}   param.saltLength - Length of salt in characters
 * @return  {Promise<string>} Returns password storage literal
 */
function hashPassword({ password, salt, iterations = ITERATIONS, digest = DIGEST, passwordHashLength = PASSWORD_HASH_LENGTH, saltLength = SALT_LENGTH, }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!salt) {
            salt = yield generateSalt(saltLength);
        }
        const hashedPassword = yield generatePBKDF2_HEX({
            password,
            salt,
            iterations,
            passwordHashLength,
            digest,
        });
        return `${salt}:${iterations}:${digest}:${hashedPassword}`;
    });
}
exports.hashPassword = hashPassword;
/**
 * Compares a passed in plain password with a password storage literal
 *
 * @param   {object} param
 * @param   {string} param.plainPassword - Plain password to compare with password storage literal
 * @param   {string} param.passwordStorageLiteral - Password storage literal to compare with plain password
 * @return  {Promise<boolean>} Returns if plain password equals the hashed password in the password storage literal
 */
function comparePasswordWithHash(plainPassword, passwordStorageLiteral) {
    return __awaiter(this, void 0, void 0, function* () {
        const parts = passwordStorageLiteral.split(':');
        if (parts.length !== 4 || isNaN(Number.parseInt(parts[1]))) {
            throw new Error('Passed in Hash is formatted wrongly');
        }
        const [salt, iterations, digest, hash] = parts;
        const hashedPassword = yield hashPassword({
            digest,
            iterations: Number.parseInt(iterations),
            password: plainPassword,
            passwordHashLength: hash.length,
            salt,
        });
        return hashedPassword === passwordStorageLiteral;
    });
}
exports.comparePasswordWithHash = comparePasswordWithHash;
// Generates a hex salt of the given length
function generateSalt(length) {
    return new Promise((resolve, reject) => {
        crypto_1.randomBytes(length / 2, (err, buf) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(buf.toString('hex'));
            }
        });
    });
}
// Generating a pbkdf2 hashed hex password
function generatePBKDF2_HEX({ password, salt, iterations, passwordHashLength, digest, }) {
    return new Promise((resolve, reject) => {
        crypto_1.pbkdf2(password, salt, iterations, passwordHashLength / 2, digest, (err, derivedKey) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(derivedKey.toString('hex'));
            }
        });
    });
}
//# sourceMappingURL=encryption.js.map