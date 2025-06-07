// agents/next_move_agent.js

export async function getNextMove(memoryKV) {
  // Example: Fetch last move from memory, increment
  const lastMove = (await memoryKV.get("last_move")) || "INIT";
  const newMove = `NextMove after ${lastMove}`;

  // Save new move
  await memoryKV.put("last_move", newMove);

  return newMove;
}

export async function run(memoryKV, input = {}) {
  return await getNextMove(memoryKV);
}
