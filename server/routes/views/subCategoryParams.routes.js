const router = require("express").Router();

const { SubCategory } = require("../../db/models");

router.get("/:paramsId", async (req, res) => {
  const { paramsId } = req.params;
  const id = Number(paramsId);

  try {
    const products = await SubCategory.findAll({
      where: { id },
      raw: true,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
