  const javaBetaPopup = document.getElementById("beta-popup");
    const javaPopupUnderstandButton = document.getElementById("beta-popup-understand-button");
    const javaBetaPopupCheckbox = document.getElementById("beta-popup-checkbox");

    window.onload = function() {
      //localStorage.setItem("betaPopupShowAgain", "false"); //-> reset showagain variable to false
      //alert(localStorage.getItem("betaPopupShowAgain")); //-> test for bugs
      const javaBetaPopupShowAgain = localStorage.getItem("betaPopupShowAgain");
      if (javaBetaPopupShowAgain === "true") {
        javaBetaPopup.style.display = "none";
      }
    }

    javaPopupUnderstandButton.addEventListener("click", () => {
      if (javaBetaPopupCheckbox.checked) {
        localStorage.setItem("betaPopupShowAgain", "true");
      }
      javaBetaPopup.classList.add("popupFadeOut");
    });

    javaPopupUnderstandButton.addEventListener("animationend", () => {
      javaBetaPopup.style.display = "none";
    });
