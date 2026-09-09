const express = require("express");
const router = express.Router();

router.get("/api/search/gimage", async (req, res) => {
  const { query, limite } = req.query;

  if (!query) return res.json({ status: false, creator: "Josué </>", error: "Parâmetro 'query' é obrigatório." });

  try {
    const { default: fetch } = await import("node-fetch");

    const params = new URLSearchParams({ query });
    if (limite) params.set("limite", limite);

    const response = await fetch(`https://systemzone.store/api/search/gimage2?${params}`);
    const data = await response.json();

    res.json({
      status: data.status ?? false,
      creator: "Josué </>",
      query: data.query ?? query,
      total: data.total ?? 0,
      resultados: data.resultados ?? [],
    });
  } catch (err) {
    res.json({ status: false, creator: "Josué </>", error: err.message });
  }
});

module.exports = router;
