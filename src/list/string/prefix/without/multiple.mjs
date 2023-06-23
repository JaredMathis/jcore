import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_prefix_without } from '../../../../string/prefix/without.mjs';
import { string_starts_with } from '../../../../string/starts/with.mjs';
import { list_adder_unique } from '../../../adder/unique.mjs';
export function list_string_prefix_without_multiple(strings, prefixes) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let predicate = string_starts_with
    let mapper = string_prefix_without
    return list_adder_unique(la => {
        for (let p of prefixes) {
            for (let s of strings) {
                if (predicate(s, p)) {
                    const v = mapper(s, p);
                    la(v);
                }
            }
        }
    });
}