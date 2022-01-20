// Setting secret number
let secret_number = Math.trunc(Math.random() * 20) + 1;
// Setting secret number ends
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    document.querySelector(".output").textContent = "Please start guessing";
  }
  //   Players wins the game
  else if (guess === secret_number) {
    document.querySelector(".output").textContent =
      "Congrats.You have guessed it corrctly";

    document.querySelector(".output").style.color = "Blue";
    document.querySelector(".output").style.fontWeight = "700";
    document.querySelector(".secret").textContent = secret_number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".score1").textContent = highscore;
    }
  }
  //   Player guessed it low
  else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector(".output").textContent = "Number is too low";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".output").style.color = "Yellow";
      document.querySelector(".output").style.fontWeight = "700";
    } else {
      document.querySelector(".output").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".output").style.color = "red";
      document.querySelector(".output").style.fontWeight = "700";
    }
  }
  //  Player guessed it high
  else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector(".output").textContent = "Number is too high";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".output").style.color = "red";
      document.querySelector(".output").style.fontWeight = "700";
    } else {
      document.querySelector(".output").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".output").style.color = "red";
      document.querySelector(".output").style.fontWeight = "700";
    }
  }
});
document.querySelector(".btn1").addEventListener("click", function () {
  document.querySelector(".insidediv").style.display = "block";
});

document.querySelector(".resetbtn").addEventListener("click", function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = "20";
  document.querySelector(".output").textContent = "Start Guessing.";
  document.querySelector(".secret").textContent = "?";
  document.querySelector(".guess").value = " ";
});
