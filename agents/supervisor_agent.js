export async function run(memoryKV, input = {}) {
    const result = "Supervisor executed with input: " + JSON.stringify(input);
    await memoryKV.put("last_supervisor_action", result);
    return result;
}
