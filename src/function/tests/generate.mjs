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
        if (await list_any_async(names_with_endings, async n => !await function_exists(n))) {
            return;
        }
        let names_with_endings_unqiue = list_unique(names_with_endings);
        console.log(predicate_names);
    });
}