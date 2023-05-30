import { js_parse_statement_module } from '../../../parse/statement/module.mjs';
import { function_extension } from '../../../../function/extension.mjs';
export function js_function_name_to_import(m) {
    const code = `import {${ m }} from './${ m }${ function_extension() }'`;
    let statement = js_parse_statement_module(code);
    return statement;
}