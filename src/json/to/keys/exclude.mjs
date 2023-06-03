import { object_merge } from '../../../object/merge.mjs';
import { object_keys_without } from '../../../object/keys/without.mjs';
export function json_to_keys_exclude(value, excluded) {
    let filtered = object_keys_without(value, excluded);
    object_merge(filtered, {});
}