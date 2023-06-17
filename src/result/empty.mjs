import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { result_property_success } from './property/success.mjs';
export function result_empty() {
    arguments_assert(arguments, []);
    return { [result_property_success()]: true };
    metadata([]);
}