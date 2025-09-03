let selectedRating = 0;
var selectedLanguage = "english";

const continueBtn = document.getElementById("continue-btn");

const selectLanguage = (language) => {
  selectedLanguage = language;
  console.log(language);
  // Update UI to show selection
  const hindiOption = document.getElementById("hindi-option");
  const englishOption = document.getElementById("english-option");
  const options = document.querySelectorAll(".language-option");
  options.forEach((option) => option.classList.remove("selected"));

  // HTML tags change
  const languageScreenTitle = document.getElementById("language-screen-title");
  languageScreenTitle.innerText = getLanguageScreenTitle();

  const languageNextButton = document.getElementById("language-next-btn");
  languageNextButton.innerText = getLanguageScreenContinueButton();

  if (language === "hindi") {
    hindiOption.classList.add("selected");
  } else {
    englishOption.classList.add("selected");
  }
};

const continueWithLanguage = () => {
  document.getElementById("language-container").style.display = "none";
  document.getElementById("rating-container").style.display = "block";
  changeAllLanguages();
};

const getLanguageScreenTitle = () => {
  if (selectedLanguage === "hindi")
    return "जारी रखने के लिए अपनी पसंदीदा भाषा चुनें";
  else return "Choose your preferred language to continue";
};

const getLanguageScreenContinueButton = () => {
  if (selectedLanguage === "hindi") return "अगला";
  else return "Next";
};

// Rating screen functions

function changeAllLanguages() {
  chageRatingTitle();
  changeStartLabel();
  changeStopLabel();
  changeContinueLabel();
  changeFeedbackSubmitButtonText();
  changeErrorContainerText();
  changeThankYouLanguage();
}

const chageRatingTitle = () => {
  const ratingScreenTitle = document.getElementById("rating-screen-title");
  const submitBtn = document.getElementById("submit-btn");
  if (selectedLanguage === "hindi") {
    ratingScreenTitle.innerText =
      "अपने अनुभव को रेटिंग दें (1 सबसे कम और 10 सबसे अधिक)?";
    submitBtn.innerText = "अगला";
  } else {
    ratingScreenTitle.innerText =
      "Rate your experience (1 is the lowest and 10 is the highest)?";
    submitBtn.innerText = "Next";
  }
};

function changeStartLabel() {
  const startLabel = document.getElementById("start-label");
  if (selectedLanguage === "hindi") {
    let startLabelTextBoldHindi =
      '<span style="color: #34c759;">शुरू करनी चाहिए</span>';
    let startLabelTextHindi =
      "GoApptiv को कौन सी चीजें " + startLabelTextBoldHindi + " ?";
    startLabel.innerHTML = startLabelTextHindi;
  } else {
    let startLabelTextBold = '<span style="color: #34c759;">Start doing</span>';
    let startLabelText =
      "What are some things GoApptiv should " + startLabelTextBold + " ?";
    startLabel.innerHTML = startLabelText;
  }
}

function changeContinueLabel() {
  const startLabel = document.getElementById("start-continue");
  if (selectedLanguage === "hindi") {
    let startLabelTextBoldHindi =
      '<span style="color: #0671c8;">जारी रखनी चाहिए</span>';
    let startLabelTextHindi =
      "GoApptiv को कौन सी चीजें " + startLabelTextBoldHindi + " ?";
    startLabel.innerHTML = startLabelTextHindi;
  } else {
    let startLabelTextBold =
      '<span style="color: #0671c8;">Continue doing</span>';
    let startLabelText =
      "What are some things GoApptiv should " + startLabelTextBold + " ?";
    startLabel.innerHTML = startLabelText;
  }
}
function changeStopLabel() {
  const startLabel = document.getElementById("start-stop");
  if (selectedLanguage === "hindi") {
    let startLabelTextBoldHindi =
      '<span style="color: red;">बंद कर देनी चाहिए</span>';
    let startLabelTextHindi =
      "GoApptiv को कौन सी चीजें " + startLabelTextBoldHindi + " ?";
    startLabel.innerHTML = startLabelTextHindi;
  } else {
    let startLabelTextBold = '<span style="color: red;">Stop doing</span>';
    let startLabelText =
      "What are some things GoApptiv should " + startLabelTextBold + " ?";
    startLabel.innerHTML = startLabelText;
  }
}

function changeErrorContainerText() {
  let hindi = "कृपया अपने विचार साझा करें (20-50 अक्षर आवश्यक)";
  let english = "Please share your thoughts (20-50 characters required)";
  const startError = document.getElementById("startError");
  const continueError = document.getElementById("continueError");
  const stopError = document.getElementById("stopError");
  const startPlaceholder = document.getElementById("start");
  const continuePlaceholder = document.getElementById("continue");
  const stopPlaceholder = document.getElementById("stop");

  if (selectedLanguage === "hindi") {
    startError.innerHTML = hindi;
    continueError.innerHTML = hindi;
    stopError.innerHTML = hindi;
    startPlaceholder.placeholder = hindi;
    continuePlaceholder.placeholder = hindi;
    stopPlaceholder.placeholder = hindi;
  } else {
    startError.innerHTML = english;
    continueError.innerHTML = english;
    stopError.innerHTML = english;
    startPlaceholder.placeholder = english;
    stopPlaceholder.placeholder = english;
    continuePlaceholder.placeholder = english;
  }
}

function changeThankYouLanguage() {
  const title = document.getElementById("thank-you-title");
  const messgae = document.getElementById("thank-you-message");
  const btn = document.getElementById("thank-you-ctn-btn");

  if (selectedLanguage === "hindi") {
    title.innerHTML = "आपकी प्रतिक्रिया के लिए धन्यवाद!";
    messgae.innerHTML =
      "आपकी बहुमूल्य प्रतिक्रिया और राय हमें अपने उत्पादों और सेवाओं को बेहतर बनाने में मदद करेंगी ताकि हम आपको बेहतर सेवा प्रदान कर सकें।";

    let innerLink = '<a href="#" target="_blank">' + "जारी रखें" + "</a>";
    btn.innerHTML = innerLink;
  } else {
    title.innerHTML = "Thank you for your feedback!";
    messgae.innerHTML =
      "Your valuable feedback and opinions will assist us in enhancing our products and services to better serve you.";
    let innerLink = '<a href="#" target="_blank">' + "Continue" + "</a>";
    btn.innerHTML = innerLink;
  }
}

function changeFeedbackSubmitButtonText() {
  const btn = document.getElementById("feedback-submit-btn");
  if (selectedLanguage === "hindi") btn.innerHTML = "प्रतिक्रिया सबमिट करें";
  else btn.innerHTML = "Submit Feedback";
}

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

  document.getElementById("feedback-container").style.display = "block";
  document.getElementById("rating-container").style.display = "none";
  document.getElementById("thank-you").style.display = "none";
}

function closeStart() {
  document.getElementById("start").style.display = "none";
}

function closeThankYou() {
  document.getElementById("thank-you").style.display = "none";
}

function getRatingText(rating) {
  if (rating == 1)
    return selectedLanguage === "hindi"
      ? "अत्यधिक पसंद नहीं"
      : "Extremely Unlikely";
  if (rating == 2)
    return selectedLanguage === "hindi" ? "एकदम पसंद नहीं" : "Not Unlikely";
  if (rating == 3)
    return selectedLanguage === "hindi" ? "बहुत पसंद नहीं" : "Very Unlikely";
  if (rating == 4)
    return selectedLanguage === "hindi" ? "पसंद नहीं" : "Unlikely";
  if (rating == 5) return selectedLanguage === "hindi" ? "निष्पक्ष" : "Neutral";
  if (rating == 6)
    return selectedLanguage === "hindi"
      ? "मध्यम रूप से पसंद है"
      : "Moderately Likely";
  if (rating == 7) return selectedLanguage === "hindi" ? "पसंद है" : "Likely";
  if (rating == 8)
    return selectedLanguage === "hindi" ? "बहुत पसंद है" : "Very Likely";
  if (rating == 9)
    return selectedLanguage === "hindi"
      ? "अत्यधिक पसंद है"
      : "Extremely Likely";
  if (rating == 10)
    return selectedLanguage === "hindi" ? "सबसे ज्यादा पसंद है" : "Most Likely";
  return "Rating not within 1 to 10"; // Default return statement
}
