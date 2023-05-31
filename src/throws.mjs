import { metadata } from './metadata.mjs';
import { arguments_count } from './arguments/count.mjs';
import { error } from './error.mjs';
export function throws(lambda) {
    arguments_count(arguments, 1);
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