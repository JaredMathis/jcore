import { throws } from '../throws.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert_arguments_count } from './arguments/count.mjs';
import { error } from '../error.mjs';
import { function_is } from '../function/is.mjs';
export function assert_throws(lambda) {
    arguments_assert(arguments, [function_is]);
    assert_arguments_count(arguments, 1);
    let errored = throws(lambda);
    if (!errored) {
        error(`Expecting throw`);
    }
    return errored;
    metadata([]);
}