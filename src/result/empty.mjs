import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { result_success } from './success.mjs';
export function result_empty() {
    arguments_assert(arguments, []);
    return { [result_success()]: true };
    metadata([]);
}