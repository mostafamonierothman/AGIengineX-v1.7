// main_worker.js

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // === Token-based Auth ===
    const authHeader = request.headers.get("Authorization");
    const validToken = env.API_TOKEN;

    if (!authHeader || authHeader !== `Bearer ${validToken}`) {
      return new Response("Unauthorized", { status: 401 });
    }

    // === Memory KV binding ===
    const memoryKV = env.MEMORY_KV;

    // === Routes ===

    // 1️⃣ Health check
    if (url.pathname === "/agi") {
      return new Response(
        JSON.stringify({
          success: true,
          message: "AGIengineX-v1.7 API is LIVE 🚀",
          timestamp: Date.now(),
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2️⃣ Next Move
    if (url.pathname === "/next_move") {
      const { getNextMove } = await import("./agents/next_move_agent.js");
      const result = await getNextMove(memoryKV);
      return new Response(JSON.stringify({ next_move: result }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 3️⃣ Opportunity
    if (url.pathname === "/opportunity") {
      const { getOpportunity } = await import("./agents/opportunity_agent.js");
      const result = await getOpportunity(memoryKV);
      return new Response(JSON.stringify({ opportunity: result }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 4️⃣ Run agent (dynamic)
    if (url.pathname === "/run_agent" && request.method === "POST") {
      const body = await request.json();
      const agentName = body.agent_name;

      try {
        const agentModule = await import(`./agents/${agentName}.js`);
        const result = await agentModule.run(memoryKV, body.input || {});
        return new Response(JSON.stringify({ result }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        return new Response(
          JSON.stringify({ error: `Agent ${agentName} not found.` }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Default: 404
    return new Response("Not Found", { status: 404 });
  },
};
