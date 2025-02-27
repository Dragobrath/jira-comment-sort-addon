# Jira Comment Sorter

Atlassian has introduced a Comment Sort feature in Jira, allowing users to sort ticket comments by "Oldest first" or "Newest first".

However, the default sorting type is set at the server level by administrators, and individual users cannot save their personal preference.
This means that if a user prefers a different sorting order than the company's default, they must manually change it every session.

This add-on solves that issue by automatically checking the sorting type and adjusting it on the fly if necessary.

## How to Use:
1. Open the add-on options.
2. Select your preferred sorting type.
3. Enter your Jira URL (e.g., https://yourcompany.atlassian.net).

## How It Works:
- The script only runs if the current page starts with the provided Jira URL.
- It searches for the \<button id="sort-button"> element and checks its data-order attribute.
- If the current sorting type does not match the user's preference, the script automatically clicks the button to switch it.

## License
This project is licensed under the [MIT License](LICENSE).