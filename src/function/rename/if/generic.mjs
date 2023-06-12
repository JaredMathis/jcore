import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_rename_after } from '../after.mjs';
import { file_js_all_identifier_multiple_rename } from '../../../file/js/all/identifier/multiple/rename.mjs';
import { object_merge } from '../../../object/merge.mjs';
import { function_rename_without_all_refactor } from '../without/all/refactor.mjs';
import { list_to_dictionary_async } from '../../../list/to/dictionary/async.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { function_name_all } from '../../name/all.mjs';
export async function function_rename_if_generic(prefix_old, prefix_new, predicate, function_name_map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    function predicate_name(n) {
        return predicate(n, prefix_old);
    }
    let names = await function_name_all();
    let names_filtered = list_filter(names, n => predicate_name(n));
    let dictionary_tests = {};
    let dictionary = await list_to_dictionary_async(names_filtered, key_to_value);
    async function key_to_value(n_old) {
        let n_new = function_name_new_get(n_old);
        let tests_renames = await function_rename_without_all_refactor(n_old, n_new);
        object_merge(tests_renames, dictionary_tests);
        return n_new;
    }
    object_merge(dictionary_tests, dictionary);
    let file_paths_changed = await file_js_all_identifier_multiple_rename(dictionary);
    await function_rename_after(file_paths_changed);
    function function_name_new_get(n_old) {
        return function_name_map(n_old, prefix_old, prefix_new);
    }
}