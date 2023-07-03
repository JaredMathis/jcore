import { string_get } from '../get.mjs';
import { string_to_tree_recursive } from './tree/recursive.mjs';
import { string_to_list } from './list.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_length } from '../length.mjs';
import { add_1 } from '../../add/1.mjs';
export function string_to_tree(s) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = {};
    for (let index = string_length(s) - 2; index >= 0; index--) {
        let s_index = string_get(s, index);
        let s_index_next = string_get(s, add_1(index));
        console.log({s_index, s_index_next})
    }
    return result;
    let offset = 0;
    let list_of_characters = string_to_list(s);
    return string_to_tree_recursive(list_of_characters, offset);
}