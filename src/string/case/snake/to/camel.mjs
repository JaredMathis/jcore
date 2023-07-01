import { string_is } from '../../../is.mjs';
import { string_case_snake_to_pascal } from './pascal.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_case_snake_to_camel(input) {
    arguments_assert(arguments, [string_is]);
    let result = string_case_snake_to_pascal(input);
    return result;
}