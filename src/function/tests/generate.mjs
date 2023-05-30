export async function function_tests_generate() {
    let tests = await function_all_tests();
    console.log(tests)
}