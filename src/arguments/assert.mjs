import { assert } from '../assert.mjs';
import { arguments_count } from './count.mjs';
import { list_is } from '../list/is.mjs';
import { range } from '../range.mjs';
export function arguments_assert(args, predicates) {
    arguments_count(arguments, 2);
    assert(list_is(predicates));
    arguments_count(args, predicates.length);
    for (let i of range(predicates.length)) {
        assert(predicates[i](args[i]));
    }
}