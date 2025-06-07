export async function run(memoryKV, input = {}) {
    const customAction = input.action || "Default Action";
    const result = `Custom agent executed: ${customAction}`;

    await memoryKV.put("last_custom_action", result);
    return result;
}
