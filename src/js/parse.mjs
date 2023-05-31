import { metadata } from '../metadata.mjs';
import { try_catch } from '../try/catch.mjs';
import { Parser } from 'acorn';
export function js_parse(unparsed) {
    return try_catch(js_parse, lambda, unparsed);
    function lambda() {
        let parsed = Parser.parse(unparsed, {
            sourceType: 'module',
            ecmaVersion: '2020'
        });
        return parsed;
    }
    metadata([]);
}