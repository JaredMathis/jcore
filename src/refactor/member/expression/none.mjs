import { object_replace } from '../../../object/replace.mjs';
import { list_set } from '../../../list/set.mjs';
import { js_node_property_arguments_get } from '../../../js/node/property/arguments/get.mjs';
import { string_a } from '../../../string/a.mjs';
import { js_code_call_expression_object_property_get } from '../../../js/code/call/expression/object/property/get.mjs';
import { js_parse_expression } from '../../../js/parse/expression.mjs';
import { js_code_expression_string } from '../../../js/code/expression/string.mjs';
import { js_node_property_name_get } from '../../../js/node/property/name/get.mjs';
import { json_to } from '../../../json/to.mjs';
import { js_node_is_identifier } from '../../../js/node/is/identifier.mjs';
import { assert_message } from '../../../assert/message.mjs';
import { js_node_property_computed_get } from '../../../js/node/property/computed/get.mjs';
import { js_node_property_property_get } from '../../../js/node/property/property/get.mjs';
import { js_node_property_object_get } from '../../../js/node/property/object/get.mjs';
import { js_node_is_member_expression } from '../../../js/node/is/member/expression.mjs';
import { js_nodes_each } from '../../../js/nodes/each.mjs';
import { refactor_import_fix_if_changed } from '../../import/fix/if/changed.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function refactor_member_expression_none(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {file_path} = args;
    await refactor_import_fix_if_changed(args, changed => {
        let {parsed} = args;
        js_nodes_each(parsed, js_node_is_member_expression, node => {
            let object = js_node_property_object_get(node);
            let property = js_node_property_property_get(node);
            let computed = js_node_property_computed_get(node);
            let arg_1 = property;
            if (!computed) {
                assert_message(js_node_is_identifier(property), json_to({
                    file_path,
                    node
                }));
                let property_name = js_node_property_name_get(property);
                let arg_1_code = js_code_expression_string(property_name);
                arg_1 = js_parse_expression(arg_1_code);
            }
            let ce_code = js_code_call_expression_object_property_get(string_a(), string_a());
            let ce = js_parse_expression(ce_code);
            let args = js_node_property_arguments_get(ce);
            list_set(args, 0, object);
            list_set(args, 1, arg_1);
            object_replace(node, ce);
            changed();
        });
    });
}