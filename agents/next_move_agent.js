export async function run(memoryKV, input = {}) {
    const result = "NextMove after INIT";
    await memoryKV.put("last_next_move", result);
    return result;
}

export async function getNextMove(memoryKV) {
    const lastMove = await memoryKV.get("last_next_move");
    return lastMove || "NextMove INIT";
}
