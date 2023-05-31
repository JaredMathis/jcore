export function js_code_call_expression(name) {
    let args = ``;
    return js_code_call_expression_with_args(name, args);
}

function js_code_call_expression_with_args(name, args) {
    return `${name}(${args})`;
}
