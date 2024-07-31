const express = require('express');
const router = express.Router();
const extractFile = require('../middleware/file');
const extractFileVideo = require('../middleware/file-Video');
const fileController = require('../controllers/file-controller');

// save a File
router.post('', extractFile, fileController.saveFile);

// save a video File
router.post('/fileWithVideo', extractFileVideo, fileController.saveVideoFile);

// // Get Total Files
router.get('', fileController.getFiles);

// // Delete Question by Id
router.delete("/:id", fileController.deleteFile);

module.exports = router;