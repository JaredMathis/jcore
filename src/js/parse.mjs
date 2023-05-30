import { Parser } from 'acorn';
import { error } from '../error.mjs';
import { log } from '../log.mjs';
export function js_parse(unparsed) {
    try {
        let parsed = Parser.parse(unparsed, {
            sourceType: 'module',
            ecmaVersion: '2020'
        });
        return parsed;
    } catch (e) {
        error_caught(js_parse, e, unparsed);
    }
}

function error_caught(fn, exception, error_message) {
    log(exception);
    log(error_message);
    error(`${fn.name} failed`);
}
