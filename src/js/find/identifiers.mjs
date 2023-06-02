import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_identifier_counts } from '../identifier/counts.mjs';
import { object_keys } from '../../object/keys.mjs';
export function js_find_identifiers(parsed) {
    arguments_assert(arguments, [tautology]);
    let counts = js_identifier_counts(parsed);
    let keys = object_keys(counts);
    return keys;
    metadata([]);
}