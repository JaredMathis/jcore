import { log } from '../log.mjs';
import { assert } from '../assert.mjs';
import { try_catch_throw } from '../try/catch/throw.mjs';
export function assert_log(condition, message) {
    try_catch_throw(() => {
        assert(condition);
    }, () => {
        log(message);
    });
}