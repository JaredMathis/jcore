import { list_min } from '../../../list/min.mjs';
import { string_index_of_try_valid } from '../../index/of/try/valid.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../is.mjs';
import { string_index_of_try } from '../../index/of/try.mjs';
import { string_difference_removed } from '../removed.mjs';
import { string_difference_added } from '../added.mjs';
import { error } from '../../../error.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
export function string_difference_apply2_parse(hunk) {
    arguments_assert(arguments, [string_is]);
    let index_removed = string_index_of_try(hunk, string_difference_removed());
    let index_added = string_index_of_try(hunk, string_difference_added());
    let indexes = [
        index_removed,
        index_added
    ];
    let valid = list_filter(indexes, string_index_of_try_valid);
    if (list_length_is_0(valid)) {
        error();
    }
    let valid_min = list_min(valid);
    let position_string = string_take();
}