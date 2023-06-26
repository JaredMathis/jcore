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
    let filter = list_multiple_combine([
        gil,
        list_single_item('.git')
    ]);
    let filtered = list_filter(file_paths, function v_2(f) {
        let v = list_all(filter, function v_3(g) {
            return and(not(string_starts_with(f, string_combine(g, directory_separator()))), not(equal(f, g)));
        });
        return v;
    });
    return filtered;
}