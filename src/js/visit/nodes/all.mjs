import { function_is } from '../../../function/is.mjs';
import { js_node_is_program } from '../../node/is/program.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { tautology } from '../../../tautology.mjs';
import { js_visit_nodes_filtered } from './filtered.mjs';
export function js_visit_nodes_all(parsed, lambda) {
    arguments_assert(arguments, [
        js_node_is_program,
        function_is
    ]);
    js_visit_nodes_filtered(parsed, tautology, lambda);
    metadata([]);
}