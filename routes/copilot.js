const express = require("express");
const router = express.Router();

router.get("/api/copilot", async (req, res) => {
  const { text, model } = req.query;

  if (!text) return res.json({ status: false, creator: "Josué </>", error: "Parâmetro 'text' é obrigatório." });

  try {
    const { default: fetch } = await import("node-fetch");

    const params = new URLSearchParams({ text });
    if (model) params.set("model", model);

    const response = await fetch(`https://systemzone.store/api/copilot2?${params}`);
    const data = await response.json();

    res.json({
      status: data.status ?? false,
      creator: "Josué </>",
      model: data.model ?? model ?? "gpt-5",
      result: data.result ?? null,
      citations: data.citations ?? [],
    });
  } catch (err) {
    res.json({ status: false, creator: "Josué </>", error: err.message });
  }
});

module.exports = router;
