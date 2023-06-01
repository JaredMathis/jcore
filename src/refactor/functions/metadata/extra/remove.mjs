import { list_add_multiple } from '../../../../list/add/multiple.mjs';
import { js_statement_expression_arguments_get } from '../../../../js/statement/expression/arguments/get.mjs';
import { refactor_functions_metadata_missing_add } from '../missing/add.mjs';
import { subtract_1 } from '../../../../subtract/1.mjs';
import { list_take } from '../../../../list/take.mjs';
import { js_statement_metadata_is } from '../../../../js/statement/metadata/is.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_last } from '../../../../list/last.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { js_function_delcaration_to_statements } from '../../../../js/function/delcaration/to/statements.mjs';
import { assert } from '../../../../assert.mjs';
import { list_length } from '../../../../list/length.mjs';
export async function refactor_functions_metadata_extra_remove() {
    await refactor_functions_metadata_missing_add();
    await file_js_all_map_args_if_function(async function logic(fd, args) {
        let statements = js_function_delcaration_to_statements(fd);
        if (!list_length_is_0(statements)) {
            let last_statement = list_last(statements);
            let last_args = js_statement_expression_arguments_get(last_statement);
            assert(js_statement_metadata_is(last_statement));
            let remaining = list_take(statements, subtract_1(list_length(statements)));
            for (let s of remaining) {
                if (js_statement_metadata_is(s)) {
                    let expression_args = js_statement_expression_arguments_get(s);
                    list_add_multiple(last_args, expression_args);
                }
            }
        }
    });
    metadata([]);
}