import { function_parse_to_declaration } from '../../../parse/to/declaration.mjs';
import { log } from '../../../../log.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_callers } from '../../../callers.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
export async function function_callers_arguments_assert_auto(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let callers = await function_callers(function_name);
    for (let c of callers) {
        let function_declaration = await function_parse_to_declaration(function_name);
    }
    console.log(callers);
}