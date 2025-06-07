export async function run(memoryKV, input) {
    // Example: store and retrieve last move
    await memoryKV.put("last_move", "NextMove after INIT");
    const lastMove = await memoryKV.get("last_move");
    return lastMove;
}
