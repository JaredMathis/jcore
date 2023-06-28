import { function_is } from '../../../../function/is.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_adder_unique } from '../../../adder/unique.mjs';
export function list_string_without_multiple_generic(prefixes, strings, predicate, mapper) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        function_is,
        function_is
    ]);
    let v_4 = function v_3(la) {
        for (let p of prefixes) {
            for (let s of strings) {
                let v_2 = predicate(s, p);
                if (v_2) {
                    const v = mapper(s, p);
                    la(v);
                }
            }
        }
    };
    let v_5 = list_adder_unique(v_4);
    return v_5;
    metadata([]);
}