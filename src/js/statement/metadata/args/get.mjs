import { list_single } from '../../../../list/single.mjs';
import { js_statement_expression_arguments_get } from '../../expression/arguments/get.mjs';
import { js_statement_metadata_is } from '../is.mjs';
import { assert } from '../../../../assert.mjs';
export function js_statement_metadata_args_get(statement) {
    assert(js_statement_metadata_is(statement));
    let last_args = js_statement_expression_arguments_get(statement);
    let metadata_args = list_single(last_args);
    return metadata_args;
}