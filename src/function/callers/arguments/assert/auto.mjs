import { function_parse_to_declaration } from '../../../parse/to/declaration.mjs';
import { log } from '../../../../log.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_callers } from '../../../callers.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { equal } from '../../../../equal.mjs';
import { js_mapper_args_to_statement_arguments_assert } from '../../../../js/mapper/args/to/statement/arguments/assert.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_property_name_params } from '../../../../js/property/name/params.mjs';
export async function function_callers_arguments_assert_auto(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let callers = await function_callers(function_name);
    for (let c of callers) {
        if (equal(function_name, c)) {
            continue;
        }
        let function_declaration = await function_parse_to_declaration(c);
        let arguments_assert_statement = await js_mapper_args_to_statement_arguments_assert({ function_declaration });
        let params = object_property_get(function_declaration, js_property_name_params())
        console.log({ function_declaration, params });
        return;
    }
    console.log(callers);
}