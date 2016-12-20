import { assert } from 'chai';
import { HashErrorTypes, hashPassword } from '../lib/encryption';


describe('Hash Password', () => {
    it('return value should consist of 4 parts separated by a ":"', async () => {
        const literal = await hashPassword({ password: 'password' });
        const parts = literal.split(':');
        assert.equal(4, parts.length);
    });
    it('should catch invalid digest argument', async () => {
        try {
            await hashPassword({ password: 'password', digest: 'invalid-has-algorithm' });
            throw new Error('hashPassword returned without throwing error');
        } catch (err) {
            assert.deepPropertyVal(err, 'type', HashErrorTypes.INVALID_DIGEST_ERROR);
        }
    });
    it('should throw a general error on other invalid arguments', async () => {
        try {
            await hashPassword({ password: 'password', digest: 'sha512', iterations: -5 });
            throw new Error('hashPassword returned without throwing error');
        } catch (err) {
            assert.deepPropertyVal(err, 'type', HashErrorTypes.UNKNOWN_ERROR);
        }
    });
});
