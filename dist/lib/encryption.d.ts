/**
 * Check if passed in digest is available
 *
 * @param  {string} digest - Digest which should be checked for validity
 * @return {boolean} Returns whether digest is valid
 */
export declare function isValidDigestAlgorithm(digest: string): boolean;
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
export declare function hashPassword({password, salt, iterations, digest, passwordHashLength, saltLength}: {
    password: string;
    salt?: string;
    iterations?: number;
    digest?: string;
    passwordHashLength?: number;
    saltLength?: number;
}): Promise<string>;
/**
 * Compares a passed in plain password with a password storage literal
 *
 * @param   {object} param
 * @param   {string} param.plainPassword - Plain password to compare with password storage literal
 * @param   {string} param.passwordStorageLiteral - Password storage literal to compare with plain password
 * @return  {Promise<boolean>} Returns if plain password equals the hashed password in the password storage literal
 */
export declare function comparePasswordWithHash(plainPassword: string, passwordStorageLiteral: string): Promise<boolean>;
export declare class HashError {
    message?: string;
    type: HashErrorTypes;
    constructor({message, type}: HashErrorInterface);
}
export declare enum HashErrorTypes {
    UNKNOWN_ERROR = 0,
    INVALID_DIGEST_ERROR = 1,
}
export interface HashErrorInterface {
    message?: string;
    type: HashErrorTypes;
}
