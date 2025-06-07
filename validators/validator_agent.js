// validators/validator_agent.js

export async function run(memoryKV, input = {}) {
  const baseUrl = input.base_url || "https://YOUR_WORKER_URL"; // <== replace or pass in

  const results = [];

  // 1️⃣ Test /agi (health check)
  try {
    const res = await fetch(`${baseUrl}/agi`, {
      headers: { Authorization: `Bearer ${input.api_token}` },
    });
    const json = await res.json();
    results.push({
      endpoint: "/agi",
      status: res.status,
      success: json.success === true,
    });
  } catch (err) {
    results.push({
      endpoint: "/agi",
      status: "ERROR",
      error: err.message,
    });
  }

  // 2️⃣ Test /next_move
  try {
    const res = await fetch(`${baseUrl}/next_move`, {
      headers: { Authorization: `Bearer ${input.api_token}` },
    });
    const json = await res.json();
    results.push({
      endpoint: "/next_move",
      status: res.status,
      response: json,
    });
  } catch (err) {
    results.push({
      endpoint: "/next_move",
      status: "ERROR",
      error: err.message,
    });
  }

  // 3️⃣ Test /opportunity
  try {
    const res = await fetch(`${baseUrl}/opportunity`, {
      headers: { Authorization: `Bearer ${input.api_token}` },
    });
    const json = await res.json();
    results.push({
      endpoint: "/opportunity",
      status: res.status,
      response: json,
    });
  } catch (err) {
    results.push({
      endpoint: "/opportunity",
      status: "ERROR",
      error: err.message,
    });
  }

  // Summary
  return {
    timestamp: new Date().toISOString(),
    test_results: results,
  };
}
