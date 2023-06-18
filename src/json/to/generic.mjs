export function json_to_generic(object, space) {
    let v = JSON.stringify(object, null, space);
    return v;
}