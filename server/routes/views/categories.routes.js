const router = require("express").Router();

const { Category, SubCategory } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: SubCategory,
        },
      ],
    });
    res.status(200).json({ sucess: true, categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
