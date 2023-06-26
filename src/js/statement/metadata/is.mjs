import { boolean_value_true } from '../../../boolean/value/true.mjs';
import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { js_node_is } from '../../node/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_statement_if_metadata } from '../if/metadata.mjs';
export function js_statement_metadata_is(statement) {
    arguments_assert(arguments, [js_node_is]);
    let success = boolean_value_false();
    let v = function if_statement_metadata(last_statement, last_expression) {
        success = boolean_value_true();
    };
    js_statement_if_metadata(statement, v);
    return success;
    metadata([]);
}