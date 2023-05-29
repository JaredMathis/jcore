import { js_identifier_counts } from './identifier/counts.mjs';
import { object_keys } from '../object/keys.mjs';
export function js_identifiers(parsed) {
    let counts = js_identifier_counts(parsed);
    let keys = object_keys(counts);
    return keys;
}