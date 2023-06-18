import { string_is } from '../../../string/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { list_single } from '../../../list/single.mjs';
import { js_program_body_get } from '../../program/body/get.mjs';
import { js_parse } from '../../parse.mjs';
comment(`Javascript doesn't allow import .. inside a function. Therefore we must able to parse code at the module level`);
export function js_parse_statement_module(code) {
    arguments_assert(arguments, [string_is]);
    let parsed = js_parse(code);
    let statements = js_program_body_get(parsed);
    let statement = list_single(statements);
    return statement;
    metadata([]);
}