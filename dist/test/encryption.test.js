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
describe('Literal structure', () => {
    it('should consist of 4 parts seperated by a ":"', () => __awaiter(this, void 0, void 0, function* () {
        const literal = yield encryption_1.hashPassword({ password: 'password' });
        const parts = literal.split(':');
        chai_1.assert.equal(4, parts.length);
    }));
});
//# sourceMappingURL=encryption.test.js.map