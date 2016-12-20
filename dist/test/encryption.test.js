"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const chai_1 = require("chai");
const encryption_1 = require("../lib/encryption");
describe('Hash Password', () => {
    it('return value should consist of 4 parts separated by a ":"', () => __awaiter(this, void 0, void 0, function* () {
        const literal = yield encryption_1.hashPassword({ password: 'password' });
        const parts = literal.split(':');
        chai_1.assert.equal(4, parts.length);
    }));
    it('should catch invalid digest argument', () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield encryption_1.hashPassword({ password: 'password', digest: 'invalid-has-algorithm' });
            throw new Error('hashPassword returned without throwing error');
        }
        catch (err) {
            chai_1.assert.deepPropertyVal(err, 'type', encryption_1.HashErrorTypes.INVALID_DIGEST_ERROR);
        }
    }));
    it('should throw a general error on other invalid arguments', () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield encryption_1.hashPassword({ password: 'password', digest: 'sha512', iterations: -5 });
            throw new Error('hashPassword returned without throwing error');
        }
        catch (err) {
            chai_1.assert.deepPropertyVal(err, 'type', encryption_1.HashErrorTypes.UNKNOWN_ERROR);
        }
    }));
});
//# sourceMappingURL=encryption.test.js.map