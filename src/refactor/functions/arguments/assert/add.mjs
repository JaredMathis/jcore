import { todo } from '../../../../todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_call_expression_to_name } from '../../../../js/call/expression/to/name.mjs';
import { node_is_type_call_expression } from '../../../../node/is/type/call/expression.mjs';
import { js_function_delcaration_to_statements } from '../../../../js/function/delcaration/to/statements.mjs';
import { log } from '../../../../log.mjs';
import { js_export_function_single_or_null } from '../../../../js/export/function/single/or/null.mjs';
import { file_js_all_map_args } from '../../../../file/js/all/map/args.mjs';
import { error } from '../../../../error.mjs';
import { list_first } from '../../../../list/first.mjs';
import { equal } from '../../../../equal.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
export async function refactor_functions_arguments_assert_add() {
    await file_js_all_map_args(function mapper(args) {
        let {parsed, file_path} = args;
        let fd = js_export_function_single_or_null(parsed);
        if (fd === null) {
            return;
        }
        let exists = false;
        let statements = js_function_delcaration_to_statements(fd);
        let statement_first = list_first(statements);
        if (node_is_type_call_expression(statement_first)) {
            let name = js_call_expression_to_name(statement_first);
            if (equal(name, function_name_get(arguments_assert))) {
                exists = true;
            }
        }
        if (!exists) {
            console.log({ fd });
            let statement_new = todo();
        }
        error();
    });
}