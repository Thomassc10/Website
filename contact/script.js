document.addEventListener('DOMContentLoaded', function() {
    // Function to copy text to clipboard
    function copyTextToClipboard(text) {
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = text;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        alert("Copied to clipboard: " + text);
    }

    // Add event listener to the specific header element
    const headerElement = document.getElementById('copyLink');
    if (headerElement) {
        headerElement.addEventListener('click', function() {
            copyTextToClipboard("https://thomassc10.github.io/Website/");
        });
    }
});

console.log("Clipboard copy functionality for the specific header element is enabled.");