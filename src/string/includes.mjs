import { string_index_of_try_valid } from './index/of/try/valid.mjs';
import { string_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { string_index_of_try } from './index/of/try.mjs';
export function string_includes(input, search) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    const index_try = string_index_of_try(input, search);
    let v = string_index_of_try_valid(index_try);
    return v;
    metadata([]);
}