import { Rule } from 'eslint';

export function importCheck(context: Rule.RuleContext): Rule.RuleListener {
  return {
    ImportDeclaration(node: any) {
      context.report({
        node,
        message: 'Are you sure about this?'
      })
    }
  }
}