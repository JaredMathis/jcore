import { cached_generic } from './cached/generic.mjs';
import { metadata } from './metadata.mjs';
import { defined_is } from './defined/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { function_is } from './function/is.mjs';
export async function cached(fn, args, lambda) {
    arguments_assert(arguments, [
        function_is,
        defined_is,
        function_is
    ]);
    let no_cache = false;
    return await cached_generic(fn, args, lambda, no_cache);
    metadata([]);
}