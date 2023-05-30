import { error_caught } from '../error/caught.mjs';
import { Parser } from 'acorn';
export function js_parse(unparsed) {
    return try_catch(js_parse, lambda);
    function lambda() {
        let parsed = Parser.parse(unparsed, {
            sourceType: 'module',
            ecmaVersion: '2020'
        });
        return parsed;
    }
}

function try_catch(fn, lambda) {
    try {
        return lambda();
    } catch (e) {
        error_caught(fn, e, unparsed);
    }
}