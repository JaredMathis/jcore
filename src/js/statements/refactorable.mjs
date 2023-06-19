import { log } from '../../log.mjs';
import { js_identifier_name_get } from '../identifier/name/get.mjs';
import { list_length } from '../../list/length.mjs';
import { equal_by } from '../../equal/by.mjs';
import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_is } from '../../list/is.mjs';
import { range } from '../../range.mjs';
import { list_get } from '../../list/get.mjs';
export function js_statements_refactorable(left, right) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    if (not(equal_by(list_length, left, right))) {
        return false;
    }
    let dictionary = {};
    for (let index of range(list_length(left))) {
        let left_i = list_get(left, index);
        let right_i = list_get(right, index);
        let left_identifiers = list_addder(la => {
            let {node} = v;
            let name = js_identifier_name_get(node);
            la(name);
        });
        log({ left_identifiers });
    }
}