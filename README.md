#[Node Secure Password](https://github.com/treylon/node-secure-password)

## Installation

Using [NPM](https://www.npmjs.com/package/node-secure-password):
```
$ npm install --save node-secure-password
```

## Why do I need this?

A lot of things can go wrong when it comes to permanently storing user passwords. To protect your user's data you should never store their passwords in plain text but instead use a hash function to store an irreversibly literal generated from your password. To generate an even saver hash a salt should be added to the password before hashing it. Re-hashing the now generated hash we gain even more security by making it even harder to bruteforce.

## Roadmap
- Add tests
- ...

## Support
Node.js >=6

## FAQs

To be done
