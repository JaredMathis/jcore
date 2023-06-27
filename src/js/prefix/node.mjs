import { js_prefix } from '../prefix.mjs';
import { js_identifier_combine } from '../identifier/combine.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function js_prefix_node() {
    arguments_assert(arguments, []);
    const suffix = 'node';
    return js_identifier_combine(js_prefix(), suffix);
    metadata([]);
}