import { Parser } from 'acorn';
import { log } from '../log.mjs';
export function js_parse(unparsed) {
    try {
        let parsed = Parser.parse(unparsed, {
            sourceType: 'module',
            ecmaVersion: '2020'
        });
        return parsed;
    } catch (e) {
        log(unparsed);
        throw e;
    }
}