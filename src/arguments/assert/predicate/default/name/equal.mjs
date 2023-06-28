import { equal } from '../../../../../equal.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { arguments_assert_predicate_default } from '../../default.mjs';
export function arguments_assert_predicate_default_name_equal(c_predicate_name) {
    let v_6 = arguments_assert_predicate_default();
    let default_name = function_name_get(v_6);
    let v_25 = equal(c_predicate_name, default_name);
    return v_25;
}