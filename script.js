const showButton = document.getElementById("showButton");
const christmasMessage = document.getElementById("as");
const treeContainer = document.querySelector(".tree-container");

// Xử lý sự kiện khi nhấn nút "Mở Thiệp"
showButton.addEventListener("click", function () {
  // Ẩn/hiện message "Merry Christmas"
  if (christmasMessage.style.display === "none") {
    christmasMessage.style.display = "block";
  } else {
    christmasMessage.style.display = "none";
  }

  // Ẩn cây thông khi mở thiệp
  if (treeContainer) {
    treeContainer.style.display = "none";
  }

  // Hiển thị thiệp với animation
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");
  var card = document.querySelector(".card");

  button.classList.add("hidden");
  guideInfo.classList.remove("hidden");

  // Trigger animation sau một chút delay
  setTimeout(function () {
    guideInfo.classList.add("show");

    // Thêm sparkle effects
    createSparkles();

    // Animate các dòng text
    animateTextLines();
  }, 50);

  // Phát nhạc khi nhấn nút (sau khi người dùng tương tác)
  const music = document.getElementById("backgroundMusic");
  if (music) {
    music.play().catch(function (error) {
      console.log("Không thể phát nhạc:", error);
    });
  }
});

// Tạo hiệu ứng sparkles xung quanh thiệp
function createSparkles() {
  const guideInfo = document.getElementById("guideInfo");
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      const randomX = Math.random();
      const randomY = Math.random();
      sparkle.style.left = randomX * 100 + "%";
      sparkle.style.top = randomY * 100 + "%";
      sparkle.style.setProperty("--random-x", randomX);
      sparkle.style.setProperty("--random-y", randomY);
      sparkle.style.animationDelay = Math.random() * 1 + "s";
      guideInfo.appendChild(sparkle);

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.remove();
        }
      }, 2000);
    }, i * 100);
  }
}

// Animate các dòng text trong thiệp
function animateTextLines() {
  const messageLines = document.querySelectorAll(".message-line");
  messageLines.forEach((line, index) => {
    line.style.setProperty("--index", index);
    line.style.animation = `slideInLeft 0.6s ease-out ${index * 0.1}s both`;
  });
}

// Xử lý đóng thiệp
document.getElementById("closeButton").addEventListener("click", function () {
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");

  // Hiển thị lại message "Merry Christmas"
  document.getElementById("as").style.display = "block";

  // Hiển thị lại cây thông khi đóng thiệp
  if (treeContainer) {
    treeContainer.style.display = "block";
  }

  // Ẩn thiệp với animation
  guideInfo.classList.remove("show");

  // Xóa tất cả sparkles
  const sparkles = document.querySelectorAll(".sparkle");
  sparkles.forEach((sparkle) => sparkle.remove());

  // Hiển thị lại nút sau khi animation kết thúc
  setTimeout(function () {
    guideInfo.classList.add("hidden");
    button.classList.remove("hidden");
  }, 600);
});

document.addEventListener("DOMContentLoaded", function () {
  var encodedText =
    "&#272;&#259;&#110;&#103;&#32;&#75;&#104;&#111;&#97;&#32;&#80;&#104;&#105;&#32;&#78;&#97;&#109;";
  var footer = document.createElement("a");
  footer.innerHTML = encodedText;
  document.body.appendChild(footer);
});
const treeIcon = document.querySelector(".tree-icon");

treeIcon.addEventListener("mouseenter", function () {
  treeIcon.classList.add("shake-animation");

  treeIcon.addEventListener("animationend", function () {
    treeIcon.classList.remove("shake-animation");
  });
});

function createSnowflakes() {
  const snowflakesContainer = document.createElement("div");
  snowflakesContainer.classList.add("snowflakes");
  document.body.appendChild(snowflakesContainer);

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const size = Math.random() * 10 + 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 3}s`;
    snowflake.style.animationDelay = `${Math.random() * 20}s`;
    snowflake.style.setProperty("--random-x", Math.random());

    snowflakesContainer.appendChild(snowflake);
  }
}

window.onload = createSnowflakes;
