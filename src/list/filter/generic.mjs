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
    let v_5 = async function v_2(la) {
        let v_6 = async function v_3(element, index) {
            let v_4 = filter(element);
            if (v_4) {
                let added = added_get(element, index);
                la(added);
            }
        };
        list_each_with_index(array, v_6);
    };
    let v = list_adder(v_5);
    return v;
    metadata([metadata_generated()]);
}