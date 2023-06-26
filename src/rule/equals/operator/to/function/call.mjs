import { js_node_property_operator_get } from '../../../../../js/node/property/operator/get.mjs';
import { js_node_is_binary_expression } from '../../../../../js/node/is/binary/expression.mjs';
import { object_replace } from '../../../../../object/replace.mjs';
import { js_parse_call_expression } from '../../../../../js/parse/call/expression.mjs';
import { string_to } from '../../../../../string/to.mjs';
import { function_add_return } from '../../../../../function/add/return.mjs';
import { function_exists } from '../../../../../function/exists.mjs';
import { integer_is } from '../../../../../integer/is.mjs';
import { assert_message } from '../../../../../assert/message.mjs';
import { number_is } from '../../../../../number/is.mjs';
import { js_node_property_value_get } from '../../../../../js/node/property/value/get.mjs';
import { js_visit_nodes_filter_async } from '../../../../../js/visit/nodes/filter/async.mjs';
import { refactor_import_fix_if_changed } from '../../../../../refactor/import/fix/if/changed.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { error } from '../../../../../error.mjs';
import { json_to } from '../../../../../json/to.mjs';
export async function rule_equals_operator_to_function_call() {
    arguments_assert(arguments, []);
    await function_names_each_map(async args => {
        let {parsed} = args;
        await refactor_import_fix_if_changed(args, async changed => {
            await js_visit_nodes_filter_async(parsed, js_node_is_binary_expression, async v => {
                let {node} = v;
                let operator = js_node_property_operator_get(node);
                error(json_to({ node }));
                let value = js_node_property_value_get(node);
                let v_4 = !number_is(value);
                if (v_4) {
                    return;
                }
                assert_message(integer_is(value), 'need to handle non-integers maybe');
                let function_name_new = `${ prefix }${ value }`;
                let v_5 = !await function_exists(function_name_new);
                if (v_5) {
                    await function_add_return(function_name_new, string_to(value));
                }
                let ce = js_parse_call_expression(function_name_new);
                object_replace(node, ce);
                changed();
            });
        });
    });
}