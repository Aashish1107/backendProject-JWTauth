const File = require('../models/file-model');

// Save a File
exports.saveFile = (req, res, next) => {
  const fileModel = new File();
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    fileModel.imagePath = url + "/images/" + req.file.filename;
  }
  fileModel.save().then(savedFile => {
    res.status(201).json({
      message: "File saved successfully",
      file: {
        ...savedFile,
        id: savedFile._id
      }
    });
  })
    .catch(error => {
      res.status(500).json({
        message: "uploading File failed!"
      })
    });
}

// Save File if Video is Attached
exports.saveVideoFile = (req, res, next) => {
  const fileModel = new File();
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    fileModel.videoPath = url + "/images/videos/" + req.file.filename;
  }
  fileModel.save().then(savedFile => {
    res.status(201).json({
      message: "Video File saved successfully",
      file: {
        ...savedFile,
        id: savedFile._id
      }
    });
  })
    .catch(error => {
      res.status(500).json({
        message: "video File uploading failed!"
      })
    });
}

// Get Total Files
exports.getFiles = (req, res, next) => {
  File.find().then(documents => {
    res.status(200).json({
      message: 'Files fetched!!!',
      files: documents
    });
  })
    .catch(error => {
      res.status(500).json({
        message: "Fetching files fialed!"
      });
    });
}

// Delete File
exports.deleteFile = (req, res, next) => {
  File.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    }
  ).catch(error => {
      res.status(500).json({
        message: "Deleting File failed!"
      });
    });;
}