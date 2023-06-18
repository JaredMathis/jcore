export async function if_else_async(if_check, on_if, on_else) {
    if (if_check) {
        await on_if();
    } else {
        await on_else();
    }
}