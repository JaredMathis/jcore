import { refactor_member_expression_none } from '../../../refactor/member/expression/none.mjs';
import { function_dependencies_names } from '../../../function/dependencies/names.mjs';
import { function_names_each_map } from '../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { js_mapper_args_to_function_name } from '../../../js/mapper/args/to/function/name.mjs';
import { list_contains } from '../../../list/contains.mjs';
export async function rule_member_expression_none() {
    arguments_assert(arguments, []);
    let excludes = await function_dependencies_names(function_name_get(object_property_get));
    await function_names_each_map(async function v_2(args) {
        let function_name = js_mapper_args_to_function_name(args);
        let v = list_contains(excludes, function_name);
        if (v) {
            return;
        }
        await refactor_member_expression_none(args);
    });
    metadata([]);
}