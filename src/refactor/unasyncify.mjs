import { js_callable_multiple } from '../js/callable/multiple.mjs';
import { log } from '../log.mjs';
import { object_replace } from '../object/replace.mjs';
import { js_node_property_argument } from '../js/node/property/argument.mjs';
import { js_node_is_await_expression } from '../js/node/is/await/expression.mjs';
import { js_visit_nodes_all } from '../js/visit/nodes/all.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { assert } from '../assert.mjs';
export async function refactor_unasyncify(args) {
    let {parsed} = args;
    assert(!js_callable_multiple(args));
    js_visit_nodes_all(parsed, lambda);
    function lambda(v) {
        let {node} = v;
        if (false)
            if (js_node_is_await_expression(node)) {
                let arg = object_property_get(node, js_node_property_argument());
                object_replace(node, arg);
            }
        console.log(node);
    }
}