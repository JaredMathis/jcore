import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function metadata_tests_none() {
    arguments_assert(arguments, []);
    let v = 'todo: metadata_tests_none';
    error(v);
    metadata([]);
}