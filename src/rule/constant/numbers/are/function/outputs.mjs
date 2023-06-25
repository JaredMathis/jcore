import { js_mapper_args_to_function_name } from '../../../../../js/mapper/args/to/function/name.mjs';
import { refactor_import_fix_if_changed } from '../../../../../refactor/import/fix/if/changed.mjs';
import { list_empty_not } from '../../../../../list/empty/not.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes } from '../../../../../refactor/functions/arguments/assert/missing/add/excludes.mjs';
import { log } from '../../../../../log.mjs';
import { file_js_all_map_args_if_function } from '../../../../../file/js/all/map/args/if/function.mjs';
import { js_visit_nodes_filter_async } from '../../../../../js/visit/nodes/filter/async.mjs';
import { function_add_return } from '../../../../../function/add/return.mjs';
import { js_node_property_value_get } from '../../../../../js/node/property/value/get.mjs';
import { assert_message } from '../../../../../assert/message.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_node_is_literal } from '../../../../../js/node/is/literal.mjs';
import { number_is } from '../../../../../number/is.mjs';
import { integer_is } from '../../../../../integer/is.mjs';
import { string_to } from '../../../../../string/to.mjs';
import { function_exists } from '../../../../../function/exists.mjs';
import { object_replace } from '../../../../../object/replace.mjs';
import { js_parse_call_expression } from '../../../../../js/parse/call/expression.mjs';
import { list_filter } from '../../../../../list/filter.mjs';
import { js_node_is_call_expression } from '../../../../../js/node/is/call/expression.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { js_call_expression_name_get } from '../../../../../js/call/expression/name/get.mjs';
import { list_intersection } from '../../../../../list/intersection.mjs';
import { js_node_is } from '../../../../../js/node/is.mjs';
import { error } from '../../../../../error.mjs';
import { list_contains } from '../../../../../list/contains.mjs';
import { js_unparse } from '../../../../../js/unparse.mjs';
export async function rule_constant_numbers_are_function_outputs() {
    arguments_assert(arguments, []);
    let excludes = await refactor_functions_arguments_assert_missing_add_excludes();
    await file_js_all_map_args_if_function(async args => {
        let {parsed} = args;
        let function_name = js_mapper_args_to_function_name(args);
        if (list_contains(excludes, function_name)) {
            return;
        }
        await refactor_import_fix_if_changed(args, async changed => {
            await js_visit_nodes_filter_async(parsed, js_node_is_literal, async v => {
                let {node} = v;
                let value = js_node_property_value_get(node);
                if (!number_is(value)) {
                    return;
                }
                assert_message(integer_is(value), 'need to handle non-integers maybe');
                let function_name_new = `integer_value_${ value }`;
                if (!await function_exists(function_name_new)) {
                    await function_add_return(function_name_new, string_to(value));
                }
                let ce = js_parse_call_expression(function_name_new);
                object_replace(node, ce);
                changed();
            });
        });
        error();
    });
}