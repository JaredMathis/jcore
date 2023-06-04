import { js_node_is_program } from '../node/is/program.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_single } from '../../list/single.mjs';
import { js_exports } from '../exports.mjs';
export function js_export_single(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let exports = js_exports(parsed);
    let export_single = list_single(exports);
    return export_single;
    metadata([]);
}