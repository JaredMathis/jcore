import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { noop } from '../../noop.mjs';
import { try_catch_throw_finally } from './throw/finally/async.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function try_catch_finally(lambda_try, lambda_finally) {
    arguments_assert(arguments, [
        function_is,
        function_is
    ]);
    let v = try_catch_throw_finally(lambda_try, noop, lambda_finally);
    return v;
    metadata([metadata_generated()]);
}