// agents/opportunity_agent.js

export async function getOpportunity(memoryKV) {
  // Example: Dummy opportunity
  const opportunity = `Opportunity at ${new Date().toISOString()}`;

  // Save to memory
  await memoryKV.put("last_opportunity", opportunity);

  return opportunity;
}

export async function run(memoryKV, input = {}) {
  return await getOpportunity(memoryKV);
}
