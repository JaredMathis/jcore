import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { object_properties } from '../object/properties.mjs';
import { visit_filter } from '../visit/filter.mjs';
import { function_is } from '../function/is.mjs';
import { js_node_is } from './node/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function js_visit(parsed, filter, lambda) {
    arguments_assert(arguments, [
        js_node_is,
        function_is,
        function_is
    ]);
    visit_filter(parsed, function v(node) {
        let v_2 = object_properties(node);
        return v_2;
    }, filter, lambda);
    metadata([metadata_generated()]);
}