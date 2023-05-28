import escodegen from 'escodegen';
export function js_unparse(parsed) {
    return escodegen.generate(parsed);
}