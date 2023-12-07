const router = require("express").Router();
const path = require("path");
const fs = require("fs").promises; // Используем модуль promises из fs для асинхронного чтения

router.get("/", async (req, res) => {
    console.log(1);
  try {
    const imageFilesNames = await fs.readdir(
      path.join(__dirname, "../../public/img/bubble")
    );

    const imageFiles = imageFilesNames.map((item) => `/img/bubble/${item}`)

    res.status(200).json({ success: true, images: imageFiles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
