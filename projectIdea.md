Description:
This project will develop a website with a real-time clock that changes its theme based on user-defined times. Users can set specific times for the website to switch between themes, such as light mode during the day and dark mode at night. The website will provide a simple interface for setting these times and selecting themes. The clock will display the current time and automatically update the theme according to the user's settings. This project aims to create a user-friendly website that adapts its appearance based on the time of day.
	
User Story:
As a user, I want to have a website with a clock that can change themes based on times I input, so that the website's appearance automatically adjusts to different times of the day.
Acceptance Criteria:v
Given I am on the website, when I view the homepage, then I should see a clock displaying the current time.
Given I am on the settings page, when I input a start and end time for a theme, then I should be able to save these times.
Given I have input and saved theme times, when the current time matches one of these times, then the website's theme should automatically change to the corresponding theme.
Given I have selected specific times, when I revisit the website, then the theme should persist and apply based on the current time.
Given the current time does not match any user-defined times, when I visit the website, then a default theme should be applied.

Notes:
The clock should update in real time.
Available themes might include light mode, dark mode, and various color schemes.
Theme changes should be smooth and not disrupt the user's experience.
User inputs should be validated to ensure start times are before end times and that there are no overlapping periods for themes.
Try to implement error handling and display clear, user-friendly messages for invalid input or saving errors.

