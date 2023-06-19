import { js_node_identifiers_replaceify } from '../node/identifiers/replaceify.mjs';
import { object_copy_json } from '../../object/copy/json.mjs';
import { js_node_identifiers } from '../node/identifiers.mjs';
import { list_length } from '../../list/length.mjs';
import { equal_by } from '../../equal/by.mjs';
import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_is } from '../../list/is.mjs';
import { range } from '../../range.mjs';
import { list_get } from '../../list/get.mjs';
import { js_unparse } from '../unparse.mjs';
import { log_multiple } from '../../log/multiple.mjs';
export function js_statements_refactorable(left, right) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    if (not(equal_by(list_length, left, right))) {
        return false;
    }
    for (let index of range(list_length(left))) {
        let left_i = list_get(left, index);
        let right_i = list_get(right, index);
        let left_identifiers = js_node_identifiers(left_i);
        let right_identifiers = js_node_identifiers(right_i);
        log_multiple([left_identifiers,right_identifiers])
        if (not(equal_by(list_length, left_identifiers, right_identifiers))) {
            return false;
        }
        let left_i_copy = object_copy_json(left_i);
        if (!js_node_identifiers_replaceify(left_i_copy, right_identifiers)) {
            return false;
        }
        if (!equal_by(js_unparse, left_i_copy, right_i)) {
            return false;
        }
    }
    return true;
}