
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("modul1_check");
    const motivation = document.getElementById("motivation");

    // Lade gespeicherten Zustand
    const checked = localStorage.getItem("modul1_done") === "true";
    checkbox.checked = checked;
    if (checked) motivation.classList.remove("hidden");

    checkbox.addEventListener("change", () => {
        localStorage.setItem("modul1_done", checkbox.checked);
        if (checkbox.checked) {
            motivation.classList.remove("hidden");
        } else {
            motivation.classList.add("hidden");
        }
    });
});
