import { js_node_is_program } from '../../../../node/is/program.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_export_function_single_generic } from '../generic.mjs';
export function js_export_function_single_or_null(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    const or_null = true;
    let v = js_export_function_single_generic(parsed, or_null);
    return v;
    metadata([]);
}