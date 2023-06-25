import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_replace } from '../../object/replace.mjs';
import { js_node_property_argument } from '../../js/node/property/argument.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_node_is_await_expression } from '../../js/node/is/await/expression.mjs';
import { js_mapper_args_is } from '../../js/mapper/args/is.mjs';
export function refactor_unasyncify_each(v) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {node} = v;
    let v_3 = js_node_is_await_expression(node);
    if (v_3) {
        let v_2 = js_node_property_argument();
        let arg = object_property_get(node, v_2);
        object_replace(node, arg);
    }
    metadata([]);
}