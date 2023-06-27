import { js_prefix_generic } from './generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function js_prefix_node() {
    arguments_assert(arguments, []);
    const suffix = 'node';
    return js_prefix_generic(suffix);
    metadata([]);
}