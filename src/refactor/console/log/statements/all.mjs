import { js_function_declaration_to_statement_arguments_assert_added } from '../../../../js/function/declaration/to/statement/arguments/assert/added.mjs';
import { log } from '../../../../log.mjs';
import { js_function_declaration_to_statements } from '../../../../js/function/declaration/to/statements.mjs';
import { js_mapper_args_is } from '../../../../js/mapper/args/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function refactor_console_log_statements_all(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {function_declaration} = args;
    let result = await js_function_declaration_to_statement_arguments_assert_added(function_declaration);
    let statements = js_function_declaration_to_statements(function_declaration);
    log(statements);
}