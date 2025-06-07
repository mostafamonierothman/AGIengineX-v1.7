export async function run(memoryKV, input) {
    // Example: echo input back
    const response = `Hello from My New Agent 🚀 — input: ${JSON.stringify(input)}`;
    await memoryKV.put("last_my_new_agent", response);
    const lastResponse = await memoryKV.get("last_my_new_agent");
    return lastResponse;
}
