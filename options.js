const sortingMode = document.getElementById("sortingMode");
const jiraUrlInput = document.getElementById("jiraUrl");

// Load saved settings
async function loadSettings() {
    const savedSettings = await browser.storage.local.get(["preferredSorting", "jiraUrl"]);
    sortingMode.value = savedSettings.preferredSorting || "asc"; // Newest first by default
    jiraUrlInput.value = savedSettings.jiraUrl || "";
}

// Save settings when the user changes them
sortingMode.addEventListener("change", () => {
    browser.storage.local.set({ preferredSorting: sortingMode.value });
});

jiraUrlInput.addEventListener("input", () => {
    browser.storage.local.set({ jiraUrl: jiraUrlInput.value.trim() });
});

loadSettings();