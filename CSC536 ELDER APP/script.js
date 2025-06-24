// Apply saved dark mode
if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark-mode");
}

const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
    darkModeToggle.checked = localStorage.getItem("darkMode") === "true";
    darkModeToggle.addEventListener("change", () => {
        const isDark = darkModeToggle.checked;
        localStorage.setItem("darkMode", isDark);
        document.documentElement.classList.toggle("dark-mode", isDark);
    });
}

// Apply saved contrast mode
if (localStorage.getItem("contrast") === "true") {
    document.body.classList.add("high-contrast");
}

const contrastCheckbox = document.querySelectorAll('input[type="checkbox"]')[1];
if (contrastCheckbox) {
    contrastCheckbox.checked = localStorage.getItem("contrast") === "true";
    contrastCheckbox.addEventListener("change", () => {
        const isHighContrast = contrastCheckbox.checked;
        localStorage.setItem("contrast", isHighContrast);
        document.body.classList.toggle("high-contrast", isHighContrast);
    });
}

// Apply saved font size
const storedFontSize = localStorage.getItem("fontSize") || "medium";
document.body.classList.add(`font-${storedFontSize}`);

const fontRadios = document.getElementsByName("fontSize");
if (fontRadios.length > 0) {
    fontRadios.forEach((radio) => {
        if (radio.value === storedFontSize) {
            radio.checked = true;
        }
        radio.addEventListener("change", () => {
            document.body.classList.remove("font-small", "font-medium", "font-large");
            document.body.classList.add(`font-${radio.value}`);
            localStorage.setItem("fontSize", radio.value);
        });
    });
}
