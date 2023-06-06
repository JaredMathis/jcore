import { js_code_call_expression_with_args_code } from '../../js/code/call/expression/with/args/code.mjs';
import { list_to_dictionary } from '../../list/to/dictionary.mjs';
import { list_unique } from '../../list/unique.mjs';
import { function_exists } from '../exists.mjs';
import { list_any_async } from '../../list/any/async.mjs';
import { log } from '../../log.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { function_map_args } from '../map/args.mjs';
import { js_mapper_args_to_statement_arguments_assert_args_predicate } from '../../js/mapper/args/to/statement/arguments/assert/args/predicate.mjs';
import { function_tests_count } from './count.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_map } from '../../list/map.mjs';
import { function_run } from '../run.mjs';
import { js_code_call_expression_with_args } from '../../js/code/call/expression/with/args.mjs';
import { range } from '../../range.mjs';
export async function function_tests_generate(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let tests_count = await function_tests_count(function_name);
    if (tests_count > 0) {
        return;
    }
    await function_map_args(function_name, async args => {
        let function_declaration = object_property_get(args, 'function_declaration');
        let predicate = await js_mapper_args_to_statement_arguments_assert_args_predicate(function_declaration);
        let predicate_names = list_map(predicate, p => object_property_get(p, 'name'));
        let ending = '_test_values';
        let names_with_endings = list_map(predicate_names, n => n + ending);
        let names_with_endings_unqiue = list_unique(names_with_endings);
        list_to_dictionary;
        if (await list_any_async(names_with_endings_unqiue, async n => !await function_exists(n))) {
            return;
        }
        let dictionary = await list_to_dictionary(names_with_endings_unqiue, async key => {
            return await function_run(key, []);
        });
        let tests_count = 10;
        for (let i of range(tests_count)) {
            let args = list_map(predicate_names, n => {
                let values = dictionary[n];
            });
            js_code_call_expression_with_args(function_name, );
        }
        console.log({ dictionary });
    });
}