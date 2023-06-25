import { not } from '../not.mjs';
import { metadata } from '../metadata.mjs';
import { assert } from '../assert.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { list_is } from '../list/is.mjs';
import { range } from '../range.mjs';
import { error } from '../error.mjs';
import { log } from '../log.mjs';
export function arguments_assert(args, predicates) {
    let v_2 = 2;
    assert_arguments_count(arguments, v_2);
    let v = list_is(predicates);
    assert(v);
    let v_3 = predicates.length;
    assert_arguments_count(args, v_3);
    for (let i of range(predicates.length)) {
        const value = args[i];
        if (not(predicates[i](value))) {
            let v_4 = {
                i,
                value
            };
            log(v_4);
            error();
        }
    }
    let v_5 = [];
    metadata(v_5);
}