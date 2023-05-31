import { metadata } from '../../metadata.mjs';
import { js_identifier_counts } from './counts.mjs';
import { object_keys } from '../../object/keys.mjs';
export function js_identifier_all(parsed) {
    let counts = js_identifier_counts(parsed);
    let keys = object_keys(counts);
    return keys;
    metadata([]);
}