import { js_statement_if_metadata } from '../if/metadata.mjs';
export function js_statement_metadata_is(last_statement) {
    let success = false;
    js_statement_if_metadata(last_statement, function if_statement_metadata(last_statement, last_expression) {
        success = true;
    });
    return success;
}