import { metadata } from '../../../../../metadata.mjs';
import { refactor_object_expression_value_assign } from '../../../../object/expression/value/assign.mjs';
import { function_names_each_map_args } from '../../../../../function/names/each/map/args.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function refactor_functions_object_expression_value_assign() {
    arguments_assert(arguments, []);
    let v = {};
    await function_names_each_map_args(refactor_object_expression_value_assign, v);
    metadata([]);
}