const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const path = require("path");
const DB = require("nedb-promises");

// 初始化伺服器
server.use(express.static(__dirname + "/AgencyProject"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(fileUpload()); // 啟用文件上傳功能

// 初始化資料庫
const PhotoDB = DB.create({ filename: path.join(__dirname, "photos.db"), autoload: true });

// 確保上傳目錄存在
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    try {
        fs.mkdirSync(uploadDir, { recursive: true });
        console.log("Upload directory created:", uploadDir);
    } catch (err) {
        console.error("Failed to create upload directory:", err);
        process.exit(1); // 無法建立目錄時退出程式
    }
}

// API: 獲取所有照片
server.get("/photos", async (req, res) => {
    try {
        const photos = await PhotoDB.find({});
        res.json(photos);
    } catch (err) {
        console.error("Error fetching photos:", err.message);
        res.status(500).send("Error fetching photos");
    }
});

// API: 上傳照片
server.post("/upload_photo", (req, res) => {
    if (!req.files || !req.files.photo) {
        console.error("No file uploaded");
        return res.status(400).send("No file uploaded");
    }

    const photo = req.files.photo;
    const safeFilename = photo.name.replace(/[^\w.-]/g, "_");
    const filename = `${Date.now()}_${Math.random().toString(36).substr(2, 5)}_${safeFilename}`;
    const filePath = path.join(uploadDir, filename);

    photo.mv(filePath, async (err) => {
        if (err) {
            console.error("File upload error:", err.message);
            return res.status(500).send("Error saving file");
        }

        console.log("File saved to:", filePath);

        const photoData = {
            filename,
            title: req.body.title?.trim() || "Untitled",
            description: req.body.description?.trim() || "No description",
            uploadDate: new Date(),
        };

        try {
            await PhotoDB.insert(photoData);
            console.log("Photo data saved:", photoData);
            res.json({ message: "Photo uploaded successfully!", photoData });
        } catch (dbErr) {
            console.error("Database insert error:", dbErr.message);
            res.status(500).send("Error saving to database");
        }
    });
});

// 捕獲未知路徑
server.use((req, res) => {
    res.status(404).send("Not Found");
});

// 啟動伺服器
const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is running at https://one-lanyu.onrender.com");
});


