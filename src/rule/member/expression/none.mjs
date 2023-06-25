import { function_dependencies_names } from '../../../function/dependencies/names.mjs';
import { js_node_property_computed_get } from '../../../js/node/property/computed/get.mjs';
import { assert_message } from '../../../assert/message.mjs';
import { js_code_expression_string } from '../../../js/code/expression/string.mjs';
import { js_node_property_name_get } from '../../../js/node/property/name/get.mjs';
import { refactor_import_fix_if_changed } from '../../../refactor/import/fix/if/changed.mjs';
import { js_node_property_arguments_get } from '../../../js/node/property/arguments/get.mjs';
import { list_set } from '../../../list/set.mjs';
import { js_node_property_property_get } from '../../../js/node/property/property/get.mjs';
import { js_node_property_object_get } from '../../../js/node/property/object/get.mjs';
import { js_code_call_expression_object_property_get } from '../../../js/code/call/expression/object/property/get.mjs';
import { js_node_is_member_expression } from '../../../js/node/is/member/expression.mjs';
import { function_names_each_map } from '../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_nodes_each } from '../../../js/nodes/each.mjs';
import { string_a } from '../../../string/a.mjs';
import { js_parse_expression } from '../../../js/parse/expression.mjs';
import { object_replace } from '../../../object/replace.mjs';
import { js_node_is_identifier } from '../../../js/node/is/identifier.mjs';
import { json_to } from '../../../json/to.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { js_mapper_args_to_function_name } from '../../../js/mapper/args/to/function/name.mjs';
import { list_contains } from '../../../list/contains.mjs';
export async function rule_member_expression_none() {
    arguments_assert(arguments, []);
    let excludes = await function_dependencies_names(function_name_get(object_property_get));
    await function_names_each_map(async args => {
        let function_name = js_mapper_args_to_function_name(args);
        if (list_contains(excludes, function_name)) {
            return;
        }
        
    });
}