import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { list_each_with_index } from '../each/with/index.mjs';
import { list_adder } from '../adder.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_filter_generic(array, filter, added_get) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = list_adder(async function v_2(la) {
        list_each_with_index(array, async function v_3(element, index) {
            if (filter(element)) {
                let added = added_get(element, index);
                la(added);
            }
        });
    });
    return v;
    metadata([metadata_generated()]);
}