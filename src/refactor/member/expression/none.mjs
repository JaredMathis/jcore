import { integer_value_1 } from '../../../integer/value/1.mjs';
import { integer_value_0 } from '../../../integer/value/0.mjs';
import { metadata } from '../../../metadata.mjs';
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
    let v_4 = function v_2(changed) {
        let {parsed} = args;
        let v_5 = function v_3(node) {
            let object = js_node_property_object_get(node);
            let property = js_node_property_property_get(node);
            let computed = js_node_property_computed_get(node);
            let arg_1 = property;
            let v = !computed;
            if (v) {
                let v_6 = js_node_is_identifier(property);
                let v_12 = {
                    file_path,
                    node
                };
                let v_7 = json_to(v_12);
                assert_message(v_6, v_7);
                let property_name = js_node_property_name_get(property);
                let arg_1_code = js_code_expression_string(property_name);
                arg_1 = js_parse_expression(arg_1_code);
            }
            let v_8 = string_a();
            let v_9 = string_a();
            let ce_code = js_code_call_expression_object_property_get(v_8, v_9);
            let ce = js_parse_expression(ce_code);
            let args = js_node_property_arguments_get(ce);
            let v_10 = integer_value_0();
            list_set(args, v_10, object);
            let v_11 = integer_value_1();
            list_set(args, v_11, arg_1);
            object_replace(node, ce);
            changed();
        };
        js_nodes_each(parsed, js_node_is_member_expression, v_5);
    };
    await refactor_import_fix_if_changed(args, v_4);
    metadata([]);
}