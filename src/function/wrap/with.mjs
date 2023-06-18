import { function_inputs } from '../inputs.mjs';
import { function_wrap_generic } from './generic.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_wrap_with(function_name_to_wrap, function_name_to_add, function_name_map) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is,
        string_identifier_is
    ]);
    let function_name_map_inputs = await function_inputs(function_name_map);
    await function_wrap_generic(function_name_to_wrap, function_name_to_add, function map(args) {
        let {identifier, statements_code} = args;
        let index = 1;
    });
}