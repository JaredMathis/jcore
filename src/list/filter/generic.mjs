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
    return list_adder(la => {
        list_each_with_index(array, (element, index) => {
            if (filter(element)) {
                let added = added_get(element, index);
                la(added);
            }
        });
    });
    metadata([metadata_generated()]);
}