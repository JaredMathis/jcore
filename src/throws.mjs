import { tautology } from './tautology.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
import { error } from './error.mjs';
export function throws(lambda) {
    arguments_assert(arguments, [tautology]);
    assert_arguments_count(arguments, 1);
    let errored = false;
    try {
        lambda();
    } catch (e) {
        errored = true;
    }
    if (!errored) {
        error(`Expecting throw`);
    }
    metadata([]);
}