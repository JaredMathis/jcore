export async function refactor_multiple(args, refactors) {
    for (let r of refactors) {
        await r(args);
    }
}