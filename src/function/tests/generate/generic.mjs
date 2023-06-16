import { function_to_declaration } from '../../to/declaration.mjs';
import { function_tests_generate_generic_each } from './generic/each.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { json_to } from '../../../json/to.mjs';
import { list_random_item } from '../../../list/random/item.mjs';
import { function_name_separator } from '../../name/separator.mjs';
import { string_function_tests_sub } from '../../../string/function/tests/sub.mjs';
import { range } from '../../../range.mjs';
import { log } from '../../../log.mjs';
import { function_run } from '../../run.mjs';
import { list_to_dictionary_async } from '../../../list/to/dictionary/async.mjs';
import { function_exists } from '../../exists.mjs';
import { list_any_async } from '../../../list/any/async.mjs';
import { list_unique } from '../../../list/unique.mjs';
import { function_name_to_tests_values } from '../../name/to/tests/values.mjs';
import { list_map } from '../../../list/map.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { js_keyword_async } from '../../../js/keyword/async.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { assert } from '../../../assert.mjs';
import { comment } from '../../../comment.mjs';
import { function_tests_count } from '../count.mjs';
export async function function_tests_generate_generic(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let tests_count = await function_tests_count(function_name);
    if (tests_count > 0) {
        return;
    }
    let function_declaration = await function_to_declaration(function_name);
    comment(`To generate code for an async function this code needs changing`);
    assert(!object_property_get(function_declaration, js_keyword_async()));
    let predicate = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    let predicate_names = list_map(predicate, p => object_property_get(p, 'name'));
    let names_with_endings = list_map(predicate_names, n => {
        return function_name_to_tests_values(n);
    });
    let names_with_endings_unqiue = list_unique(names_with_endings);
    if (await list_any_async(names_with_endings_unqiue, async n => !await function_exists(n))) {
        comment(`${ arguments_assert } types need filling in`);
        return;
    }
    let dictionary = await list_to_dictionary_async(names_with_endings_unqiue, async key => {
        return await function_run(key, []);
    });
    let args_so_far = [];
    let tries = 100;
    let count = 10;
    let count_error_max = 2;
    let count_error = 0;
    log(function_name);
    for (let i of range(count)) {
        let test_name = function_name + string_function_tests_sub() + 'generated' + function_name_separator() + (i + 1);
        for (let j of range(tries)) {
            let args = list_map(predicate_names, n => {
                let key = function_name_to_tests_values(n);
                let d = object_property_get(dictionary, key);
                let value = list_random_item(d);
                return value;
            });
            let args_json = json_to(args);
            log(args_json)
            if (list_contains(args_so_far, args_json)) {
                continue;
            }
            list_add(args_so_far, args_json);
            await function_tests_generate_generic_each(function_name, test_name, args, () => {
                count_error++;
                if (count_error > count_error_max) {
                    return true;
                }
            });
            break;
        }
    }
}