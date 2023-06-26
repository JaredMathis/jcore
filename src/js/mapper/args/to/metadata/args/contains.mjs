import { metadata } from '../../../../../../metadata.mjs';
import { function_name_get } from '../../../../../../function/name/get.mjs';
import { list_contains } from '../../../../../../list/contains.mjs';
import { js_call_expression_name_get_or_null } from '../../../../../call/expression/name/get/or/null.mjs';
import { list_map } from '../../../../../../list/map.mjs';
import { js_node_is_call_expression } from '../../../../../node/is/call/expression.mjs';
import { list_filter } from '../../../../../../list/filter.mjs';
import { js_mapper_args_to_metadata_args } from '../args.mjs';
export async function js_mapper_args_to_metadata_args_contains(args, metadata_fn) {
    let metadata_args = await js_mapper_args_to_metadata_args(args);
    let filtered = list_filter(metadata_args, js_node_is_call_expression);
    let mapped = list_map(filtered, js_call_expression_name_get_or_null);
    let v = function_name_get(metadata_fn);
    const lc = list_contains(mapped, v);
    return lc;
    metadata([]);
}