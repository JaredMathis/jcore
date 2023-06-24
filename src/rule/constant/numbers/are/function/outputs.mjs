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
import { refactor_import_fix } from '../../../../../refactor/import/fix.mjs';
import { js_parse_call_expression } from '../../../../../js/parse/call/expression.mjs';
export async function rule_constant_numbers_are_function_outputs() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function(async args => {
        let {parsed} = args;
        let {file_path} = args;
        console.log({ file_path });
        await js_visit_nodes_filter_async(parsed, js_node_is_literal, async v => {
            let {node} = v;
            let value = js_node_property_value_get(node);
            if (!number_is(value)) {
                return;
            }
            assert_message(integer_is(value), 'need to handle non-integers maybe');
            assert_message(value >= 0, 'need to handle negatives maybe');
            let function_name_new = `integer_value_${ value }`;
            if (!await function_exists(function_name_new)) {
                await function_add_return(function_name_new, string_to(value));
            }
            let ce = js_parse_call_expression(function_name_new);
            object_replace(node, ce);
            refactor_import_fix(args);
        });
    });
}