function showWelcome() {
    const modalElement = document.getElementById("welcomeModal");
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
}
function showTool(title, description) {
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    if (modalTitle && modalDescription) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
    }
}
function searchTools() {
    const searchInput = document.getElementById("searchInput");
    const toolsContainer = document.getElementById("toolsContainer");
    const noResult = document.getElementById("noResult");
    if (!searchInput || !toolsContainer) {
        return;
    }
    const keyword = searchInput.value.toLowerCase().trim();
    const tools = toolsContainer.querySelectorAll(".tool-item");
    let visibleTools = 0;
    tools.forEach(function(tool) {
        const content = tool.textContent.toLowerCase();
        if (content.includes(keyword)) {
            tool.style.display = "";
            visibleTools++;
        } else {
            tool.style.display = "none";
        }
    });
    if (noResult) {
        if (visibleTools === 0) {
            noResult.classList.remove("d-none");
        } else {
            noResult.classList.add("d-none");
        }
    }
}