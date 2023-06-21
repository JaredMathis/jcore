import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_parse_statement_module } from '../../../parse/statement/module.mjs';
import { function_extension } from '../../../../function/extension.mjs';
import { js_identifier_is } from '../../../identifier/is.mjs';
export function js_function_name_to_import(m) {
    arguments_assert(arguments, [js_identifier_is]);
    const code = `import {${ m }} from './${ m }${ function_extension() }'`;
    let statement = js_parse_statement_module(code);
    return statement;
    metadata([]);
}