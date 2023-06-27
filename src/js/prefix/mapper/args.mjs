import { metadata } from '../../../metadata.mjs';
import { js_prefix_generic } from '../generic.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_prefix_mapper_args() {
    arguments_assert(arguments, []);
    const suffix = 'node';
    return js_prefix_generic(suffix);
    metadata([]);
}