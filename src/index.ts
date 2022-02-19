import base from './configs/base.json';
import recommended from './configs/recommended.json';

module.exports = {
  configs: {
    base,
    ['recommended']: recommended,
  },
  rules: {}
};
