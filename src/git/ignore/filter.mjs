import { and } from '../../and.mjs';
import { not } from '../../not.mjs';
import { list_all } from '../../list/all.mjs';
import { equal } from '../../equal.mjs';
import { list_multiple_combine } from '../../list/multiple/combine.mjs';
import { list_single_item } from '../../list/single/item.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_starts_with } from '../../string/starts/with.mjs';
import { directory_separator } from '../../directory/separator.mjs';
import { list_filter } from '../../list/filter.mjs';
import { git_ignore_lines } from './lines.mjs';
import { string_combine } from '../../string/combine.mjs';
export async function git_ignore_filter(file_paths) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {lines: gil} = await git_ignore_lines();
    let v_6 = '.git';
    let v_4 = [
        gil,
        list_single_item(v_6)
    ];
    let filter = list_multiple_combine(v_4);
    let v_5 = function v_2(f) {
        let v_7 = function v_3(g) {
            let v_14 = directory_separator();
            let v_13 = string_combine(g, v_14);
            let v_11 = string_starts_with(f, v_13);
            let v_8 = not(v_11);
            let v_12 = equal(f, g);
            let v_9 = not(v_12);
            let v_10 = and(v_8, v_9);
            return v_10;
        };
        let v = list_all(filter, v_7);
        return v;
    };
    let filtered = list_filter(file_paths, v_5);
    return filtered;
}