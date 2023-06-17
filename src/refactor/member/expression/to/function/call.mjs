import { defined_is } from '../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_auto_after_refactors_invoke } from '../../../../../function/auto/after/refactors/invoke.mjs';
import { js_parse_call_expression } from '../../../../../js/parse/call/expression.mjs';
import { js_node_property_arguments } from '../../../../../js/node/property/arguments.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_node_property_name } from '../../../../../js/node/property/name.mjs';
import { object_replace } from '../../../../../object/replace.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_visit_nodes_filter } from '../../../../../js/visit/nodes/filter.mjs';
import { js_node_is_member_expression } from '../../../../../js/node/is/member/expression.mjs';
import { list_add } from '../../../../../list/add.mjs';
import { js_node_is_identifier } from '../../../../../js/node/is/identifier.mjs';
export async function refactor_member_expression_to_function_call(args) {
    arguments_assert(arguments, [defined_is]);
    let changed = false;
    let {parsed} = args;
    js_visit_nodes_filter(parsed, js_node_is_member_expression, v => {
        let node = object_property_get(v, 'node');
        let property = object_property_get(node, 'property');
        if (!(js_node_is_identifier(property))) {
            return;
        }
        let property_name = object_property_get(property, js_node_property_name());
        if (property_name !== 'name') {
            return;
        }
        let object = object_property_get(node, 'object');
        const name = function_name_get(function_name_get);
        let expression = js_parse_call_expression(name);
        object_replace(node, expression);
        let node_args = object_property_get(node, js_node_property_arguments());
        list_add(node_args, object);
        changed = true;
    });
    if (changed) {
        await function_auto_after_refactors_invoke(args);
    }
    metadata([]);
}