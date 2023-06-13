import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { list_add } from '../add.mjs';
import { list_each_with_index } from '../each/with/index.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_map_generic(list, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = [];
    list_each_with_index(list, (element, index) => {
        let mapped = lambda(element, index);
        list_add(result, mapped);
    });
    return result;
    metadata([metadata_generated()]);
}