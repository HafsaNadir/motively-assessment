const { validationResult } = require("express-validator");
const { getPaginatedPodcasts } = require("../services/podcastService");

const getPodcasts = (req, res) => {
  let { query } = req;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const paginatedPodcasts = getPaginatedPodcasts(query);
    res.status(200).json(paginatedPodcasts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch podcasts." });
  }
};

module.exports = {
  getPodcasts,
};
