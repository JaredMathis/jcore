import { not } from '../not.mjs';
import { metadata } from '../metadata.mjs';
import { assert } from '../assert.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { list_is } from '../list/is.mjs';
import { range } from '../range.mjs';
import { error } from '../error.mjs';
import { log } from '../log.mjs';
export function arguments_assert(args, predicates) {
    assert_arguments_count(arguments, 2);
    let v = list_is(predicates);
    assert(v);
    assert_arguments_count(args, predicates.length);
    for (let i of range(predicates.length)) {
        const value = args[i];
        let v_2 = not(predicates[i](value));
        if (v_2) {
            log({
                i,
                value
            });
            error();
        }
    }
    metadata([]);
}