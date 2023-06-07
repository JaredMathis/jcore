import { list_random_item } from '../../list/random/item.mjs';
import { js_exported_function_declaration_single } from '../../js/exported/function/declaration/single.mjs';
import { function_parse } from '../parse.mjs';
import { list_to_dictionary } from '../../list/to/dictionary.mjs';
import { list_unique } from '../../list/unique.mjs';
import { function_exists } from '../exists.mjs';
import { list_any_async } from '../../list/any/async.mjs';
import { log } from '../../log.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_mapper_args_to_statement_arguments_assert_args_predicate } from '../../js/mapper/args/to/statement/arguments/assert/args/predicate.mjs';
import { function_tests_count } from './count.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_map } from '../../list/map.mjs';
import { function_run } from '../run.mjs';
import { js_code_call_expression_with_args } from '../../js/code/call/expression/with/args.mjs';
import { range } from '../../range.mjs';
import { json_to } from '../../json/to.mjs';
export async function function_tests_generate(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let tests_count = await function_tests_count(function_name);
    if (tests_count > 0) {
        return;
    }
    let parsed = await function_parse(function_name);
    let fd = js_exported_function_declaration_single(parsed);
    let predicate = await js_mapper_args_to_statement_arguments_assert_args_predicate(fd);
    let predicate_names = list_map(predicate, p => object_property_get(p, 'name'));
    let names_with_endings = list_map(predicate_names, n => {
        return function_name_to_tests_values(n);
    });
    let names_with_endings_unqiue = list_unique(names_with_endings);
    if (await list_any_async(names_with_endings_unqiue, async n => !await function_exists(n))) {
        return;
    }
    let dictionary = await list_to_dictionary(names_with_endings_unqiue, async key => {
        return await function_run(key, []);
    });
    let tries = 100;
    let count = 10;
    for (let i of range(count)) {
        for (let j of range(tries)) {
            let args = list_map(predicate_names, n => { 
                let key = function_name_to_tests_values(n);
                let d = object_property_get(dictionary, key);
                let value = list_random_item(d)
                return value
            });
            let actual;
            let has_error = false;
            try {
                actual = await function_run(function_name, args);
            } catch (e) {
                has_error = true;
            }
            if (has_error) {
                continue;
            }
            let args_code = list_map(args, json_to);
            let ce = js_code_call_expression_with_args(function_name, args_code);
            console.log({ ce, actual, has_error });
            break;
        }
    }
}

function function_name_to_tests_values(n) {
    let ending = '_test_values';
    return n + ending;
}
