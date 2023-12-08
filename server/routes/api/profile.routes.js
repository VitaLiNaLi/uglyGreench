const router = require("express").Router();
const { User, Icon , Friend} = require("../../db/models");
//const upload = require("../../utils/uploadMulter");

//для записи желания в базу

router.put("/update-profile", async (req, res) => {
  const { description } = req.body;
  const userId = res.locals.user?.id;

  try {
    const user = await User.findByPk(userId);
    user.description = description;
    await user.save();

    delete user.password; //  чтобы не отправлять пароль на клиент

    res.json(user);
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});

// router.post('/upload-photo', upload.single('photo'), async (req, res) => {
//   const userId = res.locals.user?.id;
//   try {
//     // Обработка загруженного файла
//     const uploadedFile = req.file;
//     const filePath = uploadedFile.path.replace('public', '');

//     const user = await User.findByPk(userId);
//     user.photo = filePath;
//     await user.save();

//     delete user.password; //  чтобы не отправлять пароль на клиент

//     res.json(user);
//   } catch (error) {
//     console.error('Ошибка при обработке запроса:', error);
//     res.status(500).json({ error: 'Внутренняя ошибка сервера' });
//   }
// });

//для вывода данных админу
router.get("/Xday", async (req, res) => {
  //const userId = res.locals.user?.id;

  try {
    const allUsersCount = await User.count();
    //подготовка массива пар

    const song =
      "I wish you a Merry Christmas;I wish you a Merry Christmas;I wish you a Merry Christmas and a Happy New Year";
    const songShortArrray = song
      .replace(/[^a-zA-Zа-яА-Я]+/g, "")
      .split("")
      .slice(0, allUsersCount);

    const sortable = Object.entries(Object.assign({}, songShortArrray))
      .sort((a, b) => a[1].charCodeAt(0) - b[1].charCodeAt(0))
      .map((el) => +el[0] + 1);
    const sortable2 = sortable.slice(1, allUsersCount);
    sortable2.push(sortable[0]);
    let results = sortable2
      .map((sorta, index) => [sorta, sortable[index]])
      .sort((a, b) => a[0] - b[0]);

    await Friend.destroy({
      where: {},
      truncate: true
    }) 

    const a = await Promise.all( results.map(async(result) =>{ 
       const d = await Friend.create(
          { recipientId: result[1], donorId:Number(result[0])  }
        );
      })
    );

    const allFriends = await Friend.findAll({
      attributes: ['recipientId', 'donorId']
    });
    console.log( allFriends );
    return res.json({ success: true, data: allFriends });
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

//для каждого участика
router.get("/friend", async (req, res) => {
  const userId = res.locals.user?.id;

  try {
    const friend= await User.findOne({where:{donorId:userId}});
    const user = await User.findOne({ where: { id: friend.recipientId } });

    return res.json({ success: true, data: user });
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

//иконки лпри реге
router.get("/icon", async (req, res) => {
  //const userId = res.locals.user?.id;

  try {
    const allIcons = await Icon.findAll();
    console.log(allIcons);

    return res.json({ success: true, data: allIcons });
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
