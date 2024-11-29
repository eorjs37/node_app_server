const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/music/" });

router.post("/fileupload", upload.single("fileToUpload"), (req, res) => {
  console.log(req.file);
  const { mimetype } = req.file;
  console.log(mimetype);

  res.status(200).json({
    message: "Success",
  });
});

module.exports = router;
