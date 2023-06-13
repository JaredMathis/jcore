import { js_nodes_get } from '../../../../js/nodes/get.mjs';
import { js_parse_call_expression } from '../../../../js/parse/call/expression.mjs';
import { log } from '../../../../log.mjs';
import { object_replace } from '../../../../object/replace.mjs';
import { js_node_property_value } from '../../../../js/node/property/value.mjs';
import { js_node_is_literal } from '../../../../js/node/is/literal.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { equal } from '../../../../equal.mjs';
import { assert } from '../../../../assert.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
export function refactor_string_to_function_call(args) {
    arguments_assert(arguments, [defined_is]);
    let {string_value, replacement_function_name, parsed} = args;
    let t = 'a';
    let ce = js_parse_call_expression(replacement_function_name);
    let literals = js_nodes_get(parsed, js_node_is_literal);
    assert(!list_length_is_0(literals));
    for (let n of literals) {
        let literal_value = object_property_get(n, js_node_property_value());
        if (equal(literal_value, string_value)) {
            console.log({ ce });
            object_replace(n, ce);
        }
    }
}