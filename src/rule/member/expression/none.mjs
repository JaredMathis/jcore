import { js_node_property_arguments_get } from '../../../js/node/property/arguments/get.mjs';
import { list_set } from '../../../list/set.mjs';
import { js_node_property_property_get } from '../../../js/node/property/property/get.mjs';
import { js_node_property_object_get } from '../../../js/node/property/object/get.mjs';
import { js_code_call_expression_object_property_get } from '../../../js/code/call/expression/object/property/get.mjs';
import { log } from '../../../log.mjs';
import { js_node_is_member_expression } from '../../../js/node/is/member/expression.mjs';
import { function_names_each_map } from '../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_nodes_each } from '../../../js/nodes/each.mjs';
import { error } from '../../../error.mjs';
import { string_a } from '../../../string/a.mjs';
import { js_parse_expression } from '../../../js/parse/expression.mjs';
export async function rule_member_expression_none() {
    arguments_assert(arguments, []);
    await function_names_each_map(args => {
        let {parsed} = args;
        js_nodes_each(parsed, js_node_is_member_expression, node => {
            let arg_0 = js_node_property_object_get(node);
            let arg_1 = js_node_property_property_get(node);
            let ce_code = js_code_call_expression_object_property_get(string_a(), string_a());
            let ce = js_parse_expression(ce_code);
            console.log({
                node,
                ce
            });
            let args = js_node_property_arguments_get(ce);
            list_set(args, 0, arg_0);
            list_set(args, 1, arg_1);
            error();
        });
    });
}