(async function () {
  const settings = await browser.storage.local.get(["preferredSorting", "jiraUrl"]);
  const jiraUrl = settings.jiraUrl || "";

  // Check if the current page is a Jira ticket
  if (!jiraUrl || !window.location.href.startsWith(jiraUrl)) {
    console.log("Jira Comment Sorter: Not a Jira page, skipping...");
    return;
  }

  console.log("Jira Comment Sorter running on: ", jiraUrl);
    
  // Load the user's preferred sorting mode
  const preferredSorting = settings.preferredSorting || "asc"; // Newest first by default
  
  function checkAndSort(sortButton) {
    if (!sortButton) return;

    // Sorting order is defined in "data-order" attribute in "sort-button".
    // asc - Newest first
    // desc - Oldest first
    const currentSorting = sortButton.getAttribute("data-order");
    if (currentSorting !== preferredSorting) {
      sortButton.click();
      console.log("Sorting changed to: ${preferredSorting}");
    } else {
      console.log("Sorting is already correct.");
    }
  }
  
  function waitForSortButton() {
    const observer = new MutationObserver((mutations, observer) => {
      const sortButton = document.getElementById("sort-button");

      if (sortButton) {
        checkAndSort(sortButton);
        observer.disconnect(); // Stop observing once button is found
      }
    });

    // Observe the entire document for changes
    observer.observe(document.body, { childList: true, subtree: true });
  }

  waitForSortButton()
})();