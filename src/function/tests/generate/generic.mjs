import { not } from '../../../not.mjs';
import { function_name_get } from '../../name/get.mjs';
import { function_tests_generated_string_sub } from '../generated/string/sub.mjs';
import { count } from '../../../count.mjs';
import { function_to_declaration } from '../../to/declaration.mjs';
import { function_tests_generate_generic_each } from './generic/each.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../../list/add.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { json_to } from '../../../json/to.mjs';
import { list_random_item } from '../../../list/random/item.mjs';
import { range } from '../../../range.mjs';
import { log } from '../../../log.mjs';
import { function_run } from '../../run.mjs';
import { list_string_to_dictionary_async } from '../../../list/string/to/dictionary/async.mjs';
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
import { error } from '../../../error.mjs';
import { string_is } from '../../../string/is.mjs';
import { integer_parse } from '../../../integer/parse.mjs';
export async function function_tests_generate_generic(function_name, count_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        string_is
    ]);
    let count = integer_parse(count_string);
    let tests_count = await function_tests_count(function_name);
    if (tests_count > 0) {
        log(`tests already exist - not generating`);
        return;
    }
    let function_declaration = await function_to_declaration(function_name);
    comment(`To generate code for an async function this code needs changing`);
    let v_5 = js_keyword_async();
    let v_4 = object_property_get(function_declaration, v_5);
    let v = not(v_4);
    assert(v);
    let predicate = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    let predicate_names = list_map(predicate, function v_6(p) {
        let v_12 = object_property_get(p, 'name');
        return v_12;
    });
    let names_with_endings = list_map(predicate_names, function v_7(n) {
        let v_2 = function_name_to_tests_values(n);
        return v_2;
    });
    let names_with_endings_unqiue = list_unique(names_with_endings);
    if (await list_any_async(names_with_endings_unqiue, async function v_8(n) {
            let v_13 = await function_exists(n);
            let v_14 = not(v_13);
            return v_14;
        })) {
        error(`${ function_name_get(arguments_assert) } types need filling in ` + names_with_endings_unqiue);
        return;
    }
    let dictionary = await list_string_to_dictionary_async(names_with_endings_unqiue, async function v_9(key) {
        let v_3 = await function_run(key, []);
        return v_3;
    });
    let args_so_far = [];
    let tries = 100;
    let count_error_max = 2;
    let count_error = 0;
    log(function_name);
    for (let i of range(count)) {
        let test_name = function_name + function_tests_generated_string_sub() + (i + 1);
        for (let j of range(tries)) {
            let args = list_map(predicate_names, function v_10(n) {
                let key = function_name_to_tests_values(n);
                let d = object_property_get(dictionary, key);
                let value = list_random_item(d);
                return value;
            });
            let args_json = json_to(args);
            if (list_contains(args_so_far, args_json)) {
                continue;
            }
            list_add(args_so_far, args_json);
            await function_tests_generate_generic_each(function_name, test_name, args, function v_11() {
                count_error++;
                if (count_error > count_error_max) {
                    return true;
                }
            });
            break;
        }
    }
}