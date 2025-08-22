let selectedRating = 0;

function selectRating(rating) {
  selectedRating = rating;
  const ratingButtons = document.querySelectorAll(".rating-btn");
  ratingButtons.forEach((btn) => btn.classList.remove("selected"));
  ratingButtons[rating - 1].classList.add("selected");
  const ratingText = document.getElementById("select-rating");
  ratingText.innerText = `${rating} - ${getRatingText(rating)}`;
  ratingText.style.color =
    rating <= 6 ? "#ff3b30" : rating <= 8 ? "#ff9500" : "#34c759";
  const submitButton = document.getElementById("submit-btn");
  submitButton.classList.add("active");
  submitButton.removeAttribute("disabled");
}

function updateCharCount(textarea) {
  const charCount = document.getElementById("char-count");
  charCount.innerText = `${textarea.value.length}/100`;
}

function next() {
  if (selectedRating === 0) return;

  const feedback = (document.getElementById(
    "feedback-container"
  ).style.display = "block");
  document.getElementById("nps-container").style.display = "none";
  document.getElementById("thank-you").style.display = "none";
}

function closeStart() {
  document.getElementById("start").style.display = "none";
}

function closeThankYou() {
  document.getElementById("thank-you").style.display = "none";
}

function getRatingText(rating) {
  if (rating == 1) return "Not Likely";
  if (rating == 2) return "Extremely Unlikely";
  if (rating == 3) return "Very Unlikely";
  if (rating == 4) return "Unlikely";
  if (rating == 5) return "Neutral";
  if (rating == 6) return "Moderately Likely";
  if (rating == 7) return "Likely";
  if (rating == 8) return "Very Likely";
  if (rating == 9) return "Extremely Likely";
  if (rating == 10) return "Most Likely";
  return "Rating not within 1 to 10"; // Default return statement
}
