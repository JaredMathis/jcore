import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../is.mjs';
import { string_index_of_try } from '../../index/of/try.mjs';
import { string_difference_removed } from '../removed.mjs';
import { string_difference_added } from '../added.mjs';
export function string_difference_apply2_parse(hunk) {
    arguments_assert(arguments, [string_is]);
    let index_removed = string_index_of_try(hunk, string_difference_removed());
    let index_added = string_index_of_try(hunk, string_difference_added());
}