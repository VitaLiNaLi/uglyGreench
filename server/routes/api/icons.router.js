const router = require("express").Router();

const { Icon } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const icons = await Icon.findAll();
    res.status(200).json({ sucess: true, icons });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
