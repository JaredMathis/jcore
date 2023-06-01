import { js_node_property_arguments } from '../../../../js/node/property/arguments.mjs';
import { log } from '../../../../log.mjs';
import { refactor_functions_metadata_missing_add } from '../missing/add.mjs';
import { js_node_property_expression } from '../../../../js/node/property/expression.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
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
            assert(js_statement_metadata_is(last_statement));
            let expression = object_property_get(s, js_node_property_expression());
            let remaining = list_take(statements, subtract_1(list_length(statements)));
            for (let s of remaining) {
                if (js_statement_metadata_is(s)) {
                    let expression = object_property_get(s, js_node_property_expression());
                    let expression_args = object_property_get(expression, js_node_property_arguments());
                    console.log({
                        expression_args,
                        f: args.file_path
                    });
                }
            }
        }
    });
    metadata([]);
}