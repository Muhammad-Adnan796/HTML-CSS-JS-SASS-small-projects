score = 0;
cross = true;
let scoreCont = document.querySelector("#scoreCont");
audio = new Audio("./assets/music.mp3");
audio.play()
audiogo = new Audio("./assets/gameover.mp3");

document.onkeydown = (e) => {
  console.log(e.key);
  if (e.key == "ArrowUp") {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      //   console.log("YEs");
      dino.classList.remove("animateDino");
    }, 700);
  }
  if (e.key == "ArrowRight") {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = `${dinoX + 112}px`;
  }
  if (e.key == "ArrowLeft") {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = `${dinoX - 112}px`;
  }
};
setInterval(() => {
  dino = document.querySelector(".dino");
  obstacle = document.querySelector(".obstacle");
  gameOver = document.querySelector(".gameOver");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));

  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );

  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  //   console.log(`offsetX ${offsetX}`);

  offsetY = Math.abs(dy - oy);
  //   console.log(`offsetY ${offsetY}`);
  if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML = `Game Over - Reload to play again`;
    obstacle.classList.remove("obstacleAni");

    audiogo.play();
    setTimeout(() => {
        audiogo.pause();
        audio.pause();
    }, 1000);

  } else if (offsetX < 145 && cross) {
    score += 1;
    updatedScore(score);
    cross = false;
    audio.play();
    setTimeout(() => {
      cross = true;
    }, 1000);

    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDur = `${aniDur - 0.1}`;
      obstacle.style.animationDuration = `${newDur}s`;
      console.log(`New Animation Duration : ${newDur}`);
    }, 500);
  }
}, 10);

function updatedScore(score) {
  scoreCont.innerHTML = `Your Score : ${score}`;
}
