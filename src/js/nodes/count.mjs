import { function_is } from '../../function/is.mjs';
import { js_node_is_program } from '../node/is/program.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_visit_nodes_all } from '../visit/nodes/all.mjs';
import { count } from '../../count.mjs';
export function js_nodes_count(parsed, predicate) {
    arguments_assert(arguments, [
        js_node_is_program,
        function_is
    ]);
    let v_6 = function v_3(counter) {
        let v_7 = function v_4(v) {
            let {node} = v;
            let v_5 = predicate(node);
            if (v_5) {
                counter();
            }
        };
        js_visit_nodes_all(parsed, v_7);
    };
    let v_2 = count(v_6);
    return v_2;
    metadata([]);
}