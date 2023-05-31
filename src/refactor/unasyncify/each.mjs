import { metadata } from '../../metadata.mjs';
import { object_replace } from '../../object/replace.mjs';
import { js_node_property_argument } from '../../js/node/property/argument.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_node_is_await_expression } from '../../js/node/is/await/expression.mjs';
export function refactor_unasyncify_each(v) {
    let {node} = v;
    if (js_node_is_await_expression(node)) {
        let arg = object_property_get(node, js_node_property_argument());
        object_replace(node, arg);
    }
    metadata([]);
}