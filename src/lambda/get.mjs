export function lambda_get(value) {
    return function v(input) {
        return value;
    };
}