//Hey, no editing this!
(function() {
  const officialHosts = ["anonymousbirb5100.github.io", "birdhubgames.vercel.app"];
  const detectionPopupPage = "detection-popup.html";

  const isEmbedded = window.self !== window.top; // Embed and iframe detection
  const isGithubHost = window.location.hostname === "anonymousbirb5100.github.io"; // For anonymousbirb5100.github.io/birdhub-v2
  const isGithubPathValid = window.location.pathname.startsWith("/birdhub-v2"); // (Temporary)
  const isOfficialHost = officialHosts.includes(window.location.hostname); // Domain match

  if (isEmbedded) {
    window.location.href = detectionPopupPage;
  } else if (!isOfficialHost || (isGithubHost && !isGithubPathValid)) { // For Github Pages
    window.location.href = detectionPopupPage; // I said no editing this please!
  }
})();
