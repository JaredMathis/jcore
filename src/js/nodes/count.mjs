import { function_is } from '../../function/is.mjs';
import { js_node_is_program } from '../node/is/program.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_visit_nodes_all } from '../visit/nodes/all.mjs';
export function js_nodes_count(parsed, predicate) {
    arguments_assert(arguments, [
        js_node_is_program,
        function_is
    ]);
    let count = 0;
    js_visit_nodes_all(parsed, v => {
        let {node} = v;
        if (predicate(node)) {
            count++;
        }
    });
    return count;
    metadata([]);
}