import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { result_success } from './success.mjs';
import { object_property_set } from '../object/property/set.mjs';
export function result_unsuccess(result) {
    arguments_assert(arguments, [tautology]);
    object_property_set(result, result_success(), false);
    metadata([]);
}