export function try_catch(lambda, on_error) {
    let result;
    try {
        result = lambda();
    } catch (e) {
        result = on_error(e);
    }
    return result;
    metadata([]);
}