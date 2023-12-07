const router = require("express").Router();
const path = require("path");

const categoriesRouter = require("./views/categories.routes");
// const favoritesRouter = require('./api/favorites.routes');
const categoryParamsRouter = require("./views/categoryParamsRouter.routes");
const subCategoryParamsRouter = require("./views/subCategoryParams.routes");
const imagesBubble = require("./views/imagesBubble.routes");
const authRouter = require("./api/auth.routes");
// const profileRouter = require('./api/profile.routes');

const rejectIfNotAuthorized = require("../middlewares/rejectIfNotAuthorized");

router.use("/api/auth", authRouter);
router.use("/api/categories", categoriesRouter);
router.use("/api/category", categoryParamsRouter);
router.use("/api/sub/category", subCategoryParamsRouter);
router.use("/api/imagesList", imagesBubble);
// router.use(rejectIfNotAuthorized); // защита роутов ниже от неаутентицированных пользователей

// router.use('/api/favorites', favoritesRouter);
// router.use('/api/profile', profileRouter);

module.exports = router;
