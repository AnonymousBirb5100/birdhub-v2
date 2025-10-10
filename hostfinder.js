//Hey, no editing this!
(function() {
  const officialHosts = ["anonymousbirb5100.github.io",
                        "birdhubgames.vercel.app"];
  //["anonymousbirb5100.github.io","birdhub.netlify.app","playbirdhub.com]; -> store as array for multiple URLs
  const detectionPopupPage = "detection-popup.html";

  const isEmbedded = window.self !== window.top; //Embed detection

  const isOfficialHost = officialHosts.includes(window.location.hostname); //Domain matching

  if (isEmbedded) {
    window.location.href = detectionPopupPage;
  } else if (!isOfficialHost || !((window.location.hostname === "anonymousbirb5100.github.io" && window.location.pathname.startsWith("/birdhub-v2")))) { //I said no editing this, please!
    window.location.href = detectionPopupPage;
  }
})();
