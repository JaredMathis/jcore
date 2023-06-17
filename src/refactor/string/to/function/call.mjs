import { string_a } from '../../../../string/a.mjs';
import { refactor_import_fix } from '../../../import/fix.mjs';
import { js_nodes_get } from '../../../../js/nodes/get.mjs';
import { js_parse_call_expression } from '../../../../js/parse/call/expression.mjs';
import { object_replace } from '../../../../object/replace.mjs';
import { js_node_property_value } from '../../../../js/node/property/value.mjs';
import { js_node_is_literal } from '../../../../js/node/is/literal.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { equal } from '../../../../equal.mjs';
import { assert } from '../../../../assert.mjs';
import { list_empty } from '../../../../list/empty.mjs';
export async function refactor_string_to_function_call(args) {
    arguments_assert(arguments, [defined_is]);
    let {string_value, replacement_function_name, parsed} = args;
    let t = string_a();
    let ce = js_parse_call_expression(replacement_function_name);
    let literals = js_nodes_get(parsed, js_node_is_literal);
    assert(!(list_empty(literals)));
    for (let n of literals) {
        let literal_value = object_property_get(n, js_node_property_value());
        if (equal(literal_value, string_value)) {
            object_replace(n, ce);
        }
    }
    await refactor_import_fix(args);
}