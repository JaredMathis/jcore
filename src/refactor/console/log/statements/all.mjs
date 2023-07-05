import { list_add_after } from '../../../../list/add/after.mjs';
import { list_copy } from '../../../../list/copy.mjs';
import { refactor_import_fix_if_changed } from '../../../import/fix/if/changed.mjs';
import { js_function_declaration_to_statement_arguments_assert_added } from '../../../../js/function/declaration/to/statement/arguments/assert/added.mjs';
import { log } from '../../../../log.mjs';
import { js_function_declaration_to_statements } from '../../../../js/function/declaration/to/statements.mjs';
import { js_mapper_args_is } from '../../../../js/mapper/args/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_parse_statement } from '../../../../js/parse/statement.mjs';
import { list_each_with_index } from '../../../../list/each/with/index.mjs';
export async function refactor_console_log_statements_all(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {function_declaration} = args;
    await refactor_import_fix_if_changed(args, async function v(c) {
        let {added} = await js_function_declaration_to_statement_arguments_assert_added(function_declaration);
        if (added) {
            c();
        }
        let statements = js_function_declaration_to_statements(function_declaration);
        let copy = list_copy(statements);
        list_each_with_index(copy, function v_2(c, index) {
            let new_statement =js_parse_statement(`console.log(${ index })`);
            list_add_after(statements, new_statement, c);
        });
        log(statements);
    });
}