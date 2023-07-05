import { js_function_declaration_to_statements } from '../../../../js/function/declaration/to/statements.mjs';
import { js_mapper_args_is } from '../../../../js/mapper/args/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function refactor_console_log_statements_all(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {function_declaration} = args;
    let statements = js_function_declaration_to_statements(function_declaration);
    return statements;
}