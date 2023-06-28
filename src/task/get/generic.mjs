import { function_is } from '../../function/is.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { task_property_number } from '../property/number.mjs';
import { task_all_unsummarized } from '../all/unsummarized.mjs';
import { integer_parse } from '../../integer/parse.mjs';
export async function task_get_generic(task_number_string, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    let task_number = integer_parse(task_number_string);
    let all = await task_all_unsummarized();
    const property_name = task_property_number();
    let result = lambda(all, property_name, task_number);
    return result;
    metadata([]);
}