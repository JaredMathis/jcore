export async function if_else_async(if_check, on_if, on_else) {
    if (if_check) {
        return await on_if();
    } else {
        return await on_else();
    }
}