import { string_a } from '../../../../string/a.mjs';
import { js_parse_call_expression } from '../../../../js/parse/call/expression.mjs';
import { log } from '../../../../log.mjs';
import { object_replace } from '../../../../object/replace.mjs';
import { js_node_property_value } from '../../../../js/node/property/value.mjs';
import { js_node_is_literal } from '../../../../js/node/is/literal.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { js_nodes_each } from '../../../../js/nodes/each.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { equal } from '../../../../equal.mjs';
export function refactor_string_to_function_call(args) {
    arguments_assert(arguments, [defined_is]);
    let {string_value, replacement_function_name, parsed} = args;
    let t = string_a();
    let ce = js_parse_call_expression(replacement_function_name);
    js_nodes_each(parsed, js_node_is_literal, n => {
        let literal_value = object_property_get(n, js_node_property_value());
        if (equal(literal_value, string_value)) {
            console.log({ ce });
            object_replace(n, ce);
        }
    });
}