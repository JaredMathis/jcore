import { metadata } from '../../../../../../metadata.mjs';
import { error } from '../../../../../../error.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function metadata_function_call_arguments_are_identifiers_none() {
    arguments_assert(arguments, []);
    let v = 'todo: metadata_function_call_arguments_are_identifiers_none';
    error(v);
    metadata([]);
}