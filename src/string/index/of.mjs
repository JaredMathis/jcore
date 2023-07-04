import { string_is } from '../is.mjs';
import { string_index_of_try } from './of/try.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function string_index_of(input, search) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let result = string_index_of_try(input, search);
    return result;
}