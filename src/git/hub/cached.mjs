import { git_hub_cached_generic } from './cached/generic.mjs';
import { metadata } from '../../metadata.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_is } from '../../function/is.mjs';
export async function git_hub_cached(fn, args, lambda) {
    arguments_assert(arguments, [
        function_is,
        defined_is,
        function_is
    ]);
    let no_cache = false;
    return await git_hub_cached_generic(no_cache, fn, args, lambda);
    metadata([]);
}