import { js_node_is_function_expression } from '../../js/node/is/function/expression.mjs';
import { js_function_declaration_unasyncify_try } from '../../js/function/declaration/unasyncify/try.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_replace } from '../../object/replace.mjs';
import { js_node_property_argument } from '../../js/node/property/argument.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_node_is_await_expression } from '../../js/node/is/await/expression.mjs';
import { js_mapper_args_is } from '../../js/mapper/args/is.mjs';
import { js_node_is_function_declaration } from '../../js/node/is/function/declaration.mjs';
export function refactor_unasyncify_each(v) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let {node} = v;
    let v_3 = js_node_is_await_expression(node);
    if (v_3) {
        let v_2 = js_node_property_argument();
        let arg = object_property_get(node, v_2);
        object_replace(node, arg);
    }
    if (js_node_is_function_declaration(node) || js_node_is_function_expression(node)) {
        js_function_declaration_unasyncify_try(node);
    }
    metadata([]);
}