import { js_node_is } from '../../node/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_statement_if_metadata } from '../if/metadata.mjs';
export function js_statement_metadata_is(statement) {
    arguments_assert(arguments, [js_node_is]);
    let success = false;
    let v = function if_statement_metadata(last_statement, last_expression) {
        success = true;
    };
    js_statement_if_metadata(statement, v);
    return success;
    metadata([]);
}