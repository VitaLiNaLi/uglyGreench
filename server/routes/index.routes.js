const router = require("express").Router();
const path = require("path");

// const favoritesRouter = require('./api/favorites.routes');
const authRouter = require("./api/auth.routes");
const profileRouter = require("./api/profile.routes");
const iconsRouter = require("./api/icons.router");

const rejectIfNotAuthorized = require("../middlewares/rejectIfNotAuthorized");

router.use("/api/auth", authRouter);
// router.use(rejectIfNotAuthorized); // защита роутов ниже от неаутентицированных пользователей

// router.use('/api/favorites', favoritesRouter);
router.use("/api/profile", profileRouter);
router.use("/api/icons", iconsRouter);

module.exports = router;
