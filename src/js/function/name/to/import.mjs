import { function_extension } from '../../../../function/extension.mjs';
import { list_single } from '../../../../list/single.mjs';
import { js_body_get } from '../../../body/get.mjs';
import { js_parse } from '../../../parse.mjs';
import { js_parse_statement } from '../../../parse/statement.mjs';
export function js_function_name_to_import(m) {
    const code = `import {${ m }} from './${ m }${ function_extension() }'`;
    let parsed = js_parse(code);
    let statements = js_body_get(parsed);
    let statement = list_single(statements);
    return statement;
}