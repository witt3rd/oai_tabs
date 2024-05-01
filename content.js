// Selector for the element whose changes you want to monitor
const selector =
  "#root > div.route-container > div.app-wrapper > div.page-wrapper.app-main > div > div > div.pg-header > div.pg-preset-select-container > div > div > div.css-eknp4g > div.css-2mna9q-singleValue";

// Function to update the document title based on the contents of the observed div
function updateTitle(text) {
  // console.log("Updated content:", text);
  document.title = text;
}

// MutationObserver initialization and configuration
const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    if (mutation.type === "childList" || mutation.type === "characterData") {
      const targetElement = document.querySelector(selector);
      if (targetElement && targetElement.textContent) {
        updateTitle(targetElement.textContent);
        break; // Optional: break after finding the first relevant mutation
      }
    }
  }
});

// Start observing the document body for changes in child list and character data
observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true,
});

// Add this if you also need to check immediately upon loading
document.addEventListener("DOMContentLoaded", () => {
  const initialElement = document.querySelector(selector);
  if (initialElement) {
    updateTitle(initialElement.textContent);
  }
});
