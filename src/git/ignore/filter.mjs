import { list_multiple_combine } from '../../list/multiple/combine.mjs';
import { list_single_item } from '../../list/single/item.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_starts_with } from '../../string/starts/with.mjs';
import { list_any } from '../../list/any.mjs';
import { directory_separator } from '../../directory/separator.mjs';
import { list_filter } from '../../list/filter.mjs';
import { git_ignore_lines } from './lines.mjs';
export async function git_ignore_filter(file_paths) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let gil = await git_ignore_lines();
    let filter = list_multiple_combine([
        gil,
        list_single_item('.git')
    ]);
    let filtered = list_filter(file_paths, f => {
        let with_slash = f + directory_separator();
        return list_any(filter, g => string_starts_with(f, with_slash) || equals(f, g));
    });
    return filtered;
}