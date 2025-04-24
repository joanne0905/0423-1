let circles = []; // 儲存所有圓的資料
let points = [[-3, 5], [3, 7], [1, 5], [2, 4], [4, 3], [5, 2], [6, 2], [8, 4], [8, -1], [6, 0], [0, -3], [2, -6], [-2, -3], [-4, -2], [-5, -1], [-6, 1], [-6, 2]];
let lines = []; // 儲存所有線的資料
let size = 15; // 縮小線條的大小

function setup() {
  createCanvas(windowWidth, windowHeight); // 畫布大小
  background('#e0b1cb'); // 背景顏色

  // 初始化圓的位置和速度
  for (let i = 0; i < 10; i++) { // 圓的數量
    circles.push({ // 新增圓的資料
      x: random(windowWidth),
      y: random(windowHeight), // 隨機位置
      xSpeed: random(2, 5),
      ySpeed: random(2, 3) // 隨機速度
    });
  }

  // 初始化線的位置和速度
  for (let i = 0; i < 10; i++) {
    lines.push({
      x: random(windowWidth),
      y: random(windowHeight),
      xSpeed: random(2, 5),
      ySpeed: random(2, 5)
    });
  }
}

function draw() {
  background('#e0b1cb'); // 背景顏色

  for (let i = 0; i < circles.length; i++) { // 畫出所有圓
    let circle = circles[i]; // 取得圓的資料

    // 更新圓的位置
    circle.x += circle.xSpeed; // x座標
    circle.y += circle.ySpeed; // y座標

    // 檢查圓是否超出畫布邊界，並反轉速度
    if (circle.x < 0 || circle.x > windowWidth) { // 畫布的寬度
      circle.xSpeed *= -1; // 反轉速度
    }
    if (circle.y < 0 || circle.y > windowHeight) { // 畫布的高度
      circle.ySpeed *= -1; // 反轉速度
    }

    // 畫大圓
    fill('#0077b6'); // 填滿顏色
    strokeWeight(3); // 線條粗細
    stroke(255); // 線條顏色
    ellipse(circle.x, circle.y, 30, 30); // 縮小大圓的位置

    // 在大圓中間畫小圓
    fill('#780000'); // 填滿顏色
    ellipse(circle.x, circle.y, 10, 10); // 縮小小圓的位置
  }

  for (let i = 0; i < lines.length; i++) {
    let lineData = lines[i]; // 取得線的資料

    // 更新線的位置
    lineData.x += lineData.xSpeed;
    lineData.y += lineData.ySpeed;

    // 檢查線是否超出畫布邊界，並反轉速度
    if (lineData.x < 0 || lineData.x > windowWidth) {
      lineData.xSpeed *= -1;
    }
    if (lineData.y < 0 || lineData.y > windowHeight) {
      lineData.ySpeed *= -1;
    }

    // 畫線
    strokeWeight(1); // 縮小線條粗細
    stroke(0); // 線條顏色
    fill(255, 0, 0); // 填滿顏色
    beginShape(); // 開始圖形
    for (let j = 0; j < points.length; j++) {
      let x = lineData.x + points[j][0] * size; // 縮小線的點
      let y = lineData.y + points[j][1] * size;
      vertex(x, y); // 線的點
    }
    endShape(CLOSE); // 關閉圖形
  }
}

