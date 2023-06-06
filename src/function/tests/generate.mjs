import { log } from '../../log.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { function_map_args } from '../map/args.mjs';
import { js_mapper_args_to_statement_arguments_assert_args_predicate } from '../../js/mapper/args/to/statement/arguments/assert/args/predicate.mjs';
import { function_tests_count } from './count.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_tests_generate(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let tests_count = await function_tests_count(function_name);
    if (tests_count > 0) {
        return;
    }
    await function_map_args(function_name, async args => {
        let function_declaration = object_property_get(args, 'function_declaration');
        let predicate = await js_mapper_args_to_statement_arguments_assert_args_predicate(function_declaration);
        console.log(predicate);
    });
}