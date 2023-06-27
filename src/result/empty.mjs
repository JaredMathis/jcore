import { boolean_value_true } from '../boolean/value/true.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { result_property_success } from './property/success.mjs';
export function result_empty() {
    arguments_assert(arguments, []);
    let v = boolean_value_true();
    return { [result_property_success()]: v };
    metadata([]);
}