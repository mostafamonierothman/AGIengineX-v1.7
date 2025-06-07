export async function run(memoryKV, input = {}) {
    const result = "Opportunity after INIT";
    await memoryKV.put("last_opportunity", result);
    return result;
}

export async function getOpportunity(memoryKV) {
    const lastOpportunity = await memoryKV.get("last_opportunity");
    return lastOpportunity || "Opportunity INIT";
}
