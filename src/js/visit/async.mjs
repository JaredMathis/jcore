import { visit_filter_async } from '../../visit/filter/async.mjs';
import { metadata } from '../../metadata.mjs';
import { object_properties } from '../../object/properties.mjs';
import { function_is } from '../../function/is.mjs';
import { js_node_is } from '../node/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function js_visit_async(parsed, filter, lambda) {
    arguments_assert(arguments, [
        js_node_is,
        function_is,
        function_is
    ]);
    await visit_filter_async(parsed, function v(node) {
        let v_2 = object_properties(node);
        return v_2;
    }, filter, lambda);
    metadata([]);
}