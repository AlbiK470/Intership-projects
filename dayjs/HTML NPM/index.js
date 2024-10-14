dayjs.extend(dayjs_plugin_timezone);

document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("TimeBoard");
    const timezoneSelect = document.getElementById("timezone-select");
    const confirmButton = document.getElementById("confirm-timezone");
    const openModalButton = document.getElementById("open-modal");

    function updateTime(timezone) {
        if (timezone) {
            const currentTime = dayjs().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
            div.innerText = `Current time in ${timezone}: ${currentTime}`;
        } else {
            div.innerText = "Please select a timezone.";
        }
    }

    updateTime("UTC");

    MicroModal.init();

    openModalButton.addEventListener('click', () => {
        MicroModal.show('modal-1');
    });

    confirmButton.addEventListener('click', () => {
        const selectedTimezone = timezoneSelect.value;
        updateTime(selectedTimezone);
        MicroModal.close('modal-1');
    });
});
