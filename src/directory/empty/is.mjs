import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { integer_value_0 } from '../../integer/value/0.mjs';
import { count } from '../../count.mjs';
import { equal } from '../../equal.mjs';
import { list_length } from '../../list/length.mjs';
import { directory_read_non_recursive } from '../read/non/recursive.mjs';
export async function directory_empty_is(directory_path) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let file_paths = await directory_read_non_recursive(directory_path);
    let count = list_length(file_paths);
    let v = integer_value_0();
    const is_empty = equal(count, v);
    return is_empty;
    metadata([]);
}