export async function run(memoryKV, input = {}) {
    const loops = input.loops || 3;
    let log = [];

    for (let i = 0; i < loops; i++) {
        const msg = `Loop ${i + 1} complete.`;
        log.push(msg);
        await memoryKV.put(`loop_${i + 1}`, msg);
    }

    await memoryKV.put("last_supervisor_loop", `Completed ${loops} loops`);
    return { loopsCompleted: loops, log };
}
