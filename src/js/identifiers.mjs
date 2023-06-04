import { js_node_is_program } from './node/is/program.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { js_identifier_counts } from './identifier/counts.mjs';
import { object_keys } from '../object/keys.mjs';
export function js_identifiers(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    let counts = js_identifier_counts(parsed);
    let keys = object_keys(counts);
    return keys;
    metadata([]);
}