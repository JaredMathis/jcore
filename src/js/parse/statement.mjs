import { string_is } from '../../string/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_parse_statements } from './statements.mjs';
import { list_single } from '../../list/single.mjs';
export function js_parse_statement(statement_code) {
    arguments_assert(arguments, [string_is]);
    let code = js_parse_statements(statement_code);
    let statement = list_single(code);
    return statement;
    metadata([]);
}