// agents/supervisor_loop_agent.js

export async function run(memoryKV, input) {
  const loopCount = parseInt(await memoryKV.get("supervisor_loop_count") || "0") + 1;

  await memoryKV.put("supervisor_loop_count", loopCount.toString());
  await memoryKV.put("last_loop_status", `Loop ${loopCount} completed`);

  // Example logic: dynamically choose next agent
  const nextAgent = loopCount % 2 === 0 ? "opportunity_agent" : "next_move_agent";

  const loopResult = {
    loop_cycle: loopCount,
    next_agent: nextAgent,
    status: "OK",
    timestamp: Date.now()
  };

  return loopResult;
}
