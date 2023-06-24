import { js_visit_nodes_filter_async } from '../../../../../js/visit/nodes/filter/async.mjs';
import { function_add_return } from '../../../../../function/add/return.mjs';
import { js_node_property_value_get } from '../../../../../js/node/property/value/get.mjs';
import { js_node_is_identifier } from '../../../../../js/node/is/identifier.mjs';
import { list_all } from '../../../../../list/all.mjs';
import { assert_message } from '../../../../../assert/message.mjs';
import { js_node_property_arguments_get } from '../../../../../js/node/property/arguments/get.mjs';
import { equal } from '../../../../../equal.mjs';
import { list_any } from '../../../../../list/any.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { js_call_expression_name_get } from '../../../../../js/call/expression/name/get.mjs';
import { function_names_each } from '../../../../../function/names/each.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_node_is_literal } from '../../../../../js/node/is/literal.mjs';
import { number_is } from '../../../../../number/is.mjs';
import { integer_is } from '../../../../../integer/is.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { string_to } from '../../../../../string/to.mjs';
import { function_exists } from '../../../../../function/exists.mjs';
export async function rule_constant_numbers_are_function_outputs() {
    arguments_assert(arguments, []);
    await function_names_each(async args => {
        let {parsed} = args;
        let {file_path} = args;
        await js_visit_nodes_filter_async(parsed, js_node_is_literal, async node => {
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
            let name = js_call_expression_name_get(node);
            const rule_exceptions = [
                arguments_assert,
                metadata
            ];
            let rule_exceptions_names = list_map(rule_exceptions, function_name_get);
            if (list_any(rule_exceptions_names, e => equal(e, name))) {
                return;
            }
            let args = js_node_property_arguments_get(node);
            for (let a of args) {
                if (js_node_is_identifier(a)) {
                    continue;
                }
            }
            assert_message(list_all(args, js_node_is_identifier), file_path);
        });
    });
}