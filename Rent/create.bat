@echo off
chcp 65001

:: انتقل إلى المجلد الذي يحتوي على السكربت
cd /d "D:\Ziad\Programming\Web Projects\Prime Real Estate\Rent"

:: توليد ملفات HTML باستخدام loop
for /L %%i in (1,1,500) do (
    echo ^<!DOCTYPE html^>^<html lang="ar"^>^<head^>^<meta charset="UTF-8" /^>^<meta name="viewport" content="width=device-width, initial-scale=1.0" /^>^<title^>Rent-%%i^</title^>^<link rel="stylesheet" href="../CSS/Master.css" /^>^<link rel="Icon" href="../images/house-1.png" /^>^</head^>^<body^>^<div class="header"^>^<div class="container head-bar"^>^<img class="logo" src="../images/house-1.png" alt="logo" /^>^<div class="name"^>^</div^>^</div^>^<div class="links-bar"^>^<ul class="container links"^>^<li^>^<a href="../index.html"^>^</a^>^</li^>^<li^>^<a href="../Cars.html"^>^</a^>^</li^>^<li^>^<a href="../Rent.html"^>^</a^>^</li^>^<li^>^<a href="../Sale.html"^>^</a^>^</li^>^</ul^>^</div^>^<div class="view container"^>^<video class="Rent-%%i" src="../videos/Rent/Rent-%%i.mp4" controls^>^</video^>^<div class="buy-bar"^>^<h1 id="name-r%%i"^>^</h1^>^<a href="#"^>^<button^>^</button^>^</a^>^</div^>^<p class="description" id="detail-r%%i"^>^</p^>^</div^>^<div class="footer"^>^<div class="container"^>^<p^>^</p^>^</div^>^</div^>^<script src="../Rent.js"^>^</script^>^</body^>^</html^> > "Rent-%%i.html"
)
