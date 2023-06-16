export async function try_catch_throw(lambda_try, lambda_catch) {
    try {
        await lambda_try();
    } catch (e) {
        await lambda_catch(e);
        throw e;
    }
}