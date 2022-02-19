import base from './configs/base.json';
import recommended from './configs/recommended.json';
import { importCheck } from './rules/import-check'

module.exports = {
  configs: {
    base,
    ['recommended']: recommended,
  },
  rules: {
    'import-check': {
      create: importCheck,
    },
  }
};
