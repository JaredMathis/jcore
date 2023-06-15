import { task_symbol_hash } from '../symbol/hash.mjs';
import { string_prefix_without } from '../../string/prefix/without.mjs';
export function task_id_unhash(task_number_hashed) {
    return string_prefix_without(task_number_hashed, task_symbol_hash());
}