import { function_auto_after } from '../../auto/after.mjs';
import { function_map_multiple } from '../../map/multiple.mjs';
import { refactor_metadata_generated_add_function } from '../../../refactor/metadata/generated/add/function.mjs';
import { function_add_with_statements_synchronized } from '../../add/with/statements/synchronized.mjs';
import { js_parse_statement } from '../../../js/parse/statement.mjs';
import { json_equal } from '../../../json/equal.mjs';
import { js_statement_assignment } from '../../../js/statement/assignment.mjs';
import { error } from '../../../error.mjs';
import { js_code_call_expression_statement_with_args_code } from '../../../js/code/call/expression/statement/with/args/code.mjs';
import { throws } from '../../../throws.mjs';
import { function_name_get } from '../../name/get.mjs';
import { js_code_call_expression_with_args_code } from '../../../js/code/call/expression/with/args/code.mjs';
import { js_code_call_expression_with_args } from '../../../js/code/call/expression/with/args.mjs';
import { list_add } from '../../../list/add.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { json_to } from '../../../json/to.mjs';
import { list_random_item } from '../../../list/random/item.mjs';
import { function_name_separator } from '../../name/separator.mjs';
import { string_function_tests_sub } from '../../../string/function/tests/sub.mjs';
import { range } from '../../../range.mjs';
import { log } from '../../../log.mjs';
import { function_run } from '../../run.mjs';
import { list_to_dictionary } from '../../../list/to/dictionary.mjs';
import { function_exists } from '../../exists.mjs';
import { list_any_async } from '../../../list/any/async.mjs';
import { list_unique } from '../../../list/unique.mjs';
import { function_name_to_tests_values } from '../../name/to/tests/values.mjs';
import { list_map } from '../../../list/map.mjs';
import { js_mapper_args_to_statement_arguments_assert_args_predicate } from '../../../js/mapper/args/to/statement/arguments/assert/args/predicate.mjs';
import { js_keyword_async } from '../../../js/keyword/async.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { assert } from '../../../assert.mjs';
import { comment } from '../../../comment.mjs';
import { js_exported_function_declaration_single } from '../../../js/exported/function/declaration/single.mjs';
import { function_parse } from '../../parse.mjs';
import { function_tests_count } from '../count.mjs';
export async function function_tests_generate_generic(function_name) {
    let tests_count = await function_tests_count(function_name);
    if (tests_count > 0) {
        return;
    }
    let parsed = await function_parse(function_name);
    let function_declaration = js_exported_function_declaration_single(parsed);
    comment(`To generate code for an async function this code needs changing`);
    assert(!object_property_get(function_declaration, js_keyword_async()));
    let predicate = await js_mapper_args_to_statement_arguments_assert_args_predicate(function_declaration);
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
            if (list_contains(args_so_far, args_json)) {
                continue;
            }
            list_add(args_so_far, args_json);
            
            let expected;
            let has_error = false;
            try {
                expected = await function_run(function_name, args);
            } catch (e) {
                has_error = true;
            }
            if (has_error) {
                count_error++;
                if (count_error > count_error_max) {
                    continue;
                }
            }
            let args_code = list_map(args, json_to);
            let ce_function = js_code_call_expression_with_args(function_name, args_code);
            let statements_code;
            let statement_assert;
            if (has_error) {
                let ce_throws = js_code_call_expression_with_args_code(function_name_get(throws), `() => ${ ce_function }`);
                statement_assert = js_code_call_expression_statement_with_args_code(function_name_get(assert), ce_throws);
                statements_code = [statement_assert];
                log({
                    args,
                    error: true
                });
            } else {
                let identifier_expected = 'expected';
                let statement_expected = js_statement_assignment(identifier_expected, json_to(expected));
                let identifier_actual = 'actual';
                let statement_function = js_statement_assignment(identifier_actual, ce_function);
                let ce_equal = js_code_call_expression_with_args(function_name_get(json_equal), [
                    identifier_actual,
                    identifier_expected
                ]);
                statement_assert = js_code_call_expression_statement_with_args_code(function_name_get(assert), ce_equal);
                statements_code = [
                    statement_expected,
                    statement_function,
                    statement_assert
                ];
                log({
                    args,
                    expected
                });
            }
            let statements = list_map(statements_code, js_parse_statement);
            await function_add_with_statements_synchronized(test_name, statements, false);
            let refactors = [refactor_metadata_generated_add_function];
            let names = list_map(refactors, function_name_get);
            await function_map_multiple(names, test_name);
            await function_auto_after(test_name);
            break;
        }
    }
}

async function function_tests_generate_generic_each() {}