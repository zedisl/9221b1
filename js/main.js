const DOCUMENT_URL =
    "https://example.com/document";

const ARCHIVE_URL =
    "https://example.com/archive";


const documentButton =
    document.getElementById("documentButton");

const archiveButton =
    document.getElementById("archiveButton");


documentButton.addEventListener(
    "click",
    () => {
        window.top.location.href =
            DOCUMENT_URL;
    }
);


archiveButton.addEventListener(
    "click",
    () => {
        window.top.location.href =
            ARCHIVE_URL;
    }
);
