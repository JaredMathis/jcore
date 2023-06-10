import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../is.mjs';
import { string_index_of_try } from '../../index/of/try.mjs';
export function string_difference_apply2_parse(hunk) {
    arguments_assert(arguments, [string_is]);
    let index_minus = string_index_of_try(hunk, '-');
}