// Import necessary plugins
dayjs.extend(dayjs_plugin_timezone);

document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("TimeBoard");
    const timezoneSelect = document.getElementById("timezone-select");
    const confirmButton = document.getElementById("confirm-timezone");
    const openModalButton = document.getElementById("open-modal");

    // Function to update the displayed time
    function updateTime(timezone) {
        if (timezone) {
            console.log(`Selected timezone: ${timezone}`); // Debugging line
            const currentTime = dayjs().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
            div.innerText = `Current time in ${timezone}: ${currentTime}`;
        } else {
            div.innerText = "Please select a timezone.";
        }
    }

    // Display default UTC time
    updateTime("UTC");

    // Initialize MicroModal
    MicroModal.init();

    // Open the modal
    openModalButton.addEventListener('click', () => {
        MicroModal.show('modal-1');
    });

    // Update time when a timezone is confirmed
    confirmButton.addEventListener('click', () => {
        const selectedTimezone = timezoneSelect.value;
        updateTime(selectedTimezone);
        MicroModal.close('modal-1');
    });
});
