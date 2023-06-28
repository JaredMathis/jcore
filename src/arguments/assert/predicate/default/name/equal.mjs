import { arguments_assert_todo } from '../../../todo.mjs';
import { arguments_assert } from '../../../../assert.mjs';
import { equal } from '../../../../../equal.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { arguments_assert_predicate_default } from '../../default.mjs';
export function arguments_assert_predicate_default_name_equal(c_predicate_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_6 = arguments_assert_predicate_default();
    let default_name = function_name_get(v_6);
    let v_25 = equal(c_predicate_name, default_name);
    return v_25;
}