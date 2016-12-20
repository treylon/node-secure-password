import { assert } from 'chai';
import { hashPassword } from '../lib/encryption';


describe('Literal structure', () => {
    it('should consist of 4 parts seperated by a ":"', async () => {
        const literal = await hashPassword({ password: 'password' });
        const parts = literal.split(':');
        assert.equal(4, parts.length);
    });
});
