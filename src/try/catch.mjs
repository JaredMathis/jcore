import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { error_caught } from '../error/caught.mjs';
export function try_catch(fn, lambda, error_message) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    try {
        return lambda();
    } catch (e) {
        error_caught(fn, e, error_message);
    }
    metadata([]);
}