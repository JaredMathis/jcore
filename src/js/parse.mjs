import { error_caught } from '../error/caught.mjs';
import { Parser } from 'acorn';
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