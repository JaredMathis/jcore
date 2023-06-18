import { function_is } from '../function/is.mjs';
import { js_node_is_program } from './node/is/program.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_properties } from '../object/properties.mjs';
import { visit_filter } from '../visit/filter.mjs';
import { js_program_body_get } from './program/body/get.mjs';
import { js_node_is } from './node/is.mjs';
export function js_visit(parsed, filter, lambda) {
    arguments_assert(arguments, [
        js_node_is,
        function_is,
        function_is
    ]);
    let root;
    if (false)
        if (js_node_is_program(parsed)) {
            root = js_program_body_get(parsed);
        } else {
            root = parsed;
        }
    visit_filter(parsed, function v(node) {
        let v_2 = object_properties(node);
        return v_2;
    }, filter, lambda);
    metadata([]);
}