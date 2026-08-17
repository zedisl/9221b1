const DOCUMENT_URL =
    "https://sites.google.com/view/scp9221/document";

const ARCHIVE_URL =
    "https://sites.google.com/view/scp9221/doc";


const documentButton =
    document.getElementById(
        "documentButton"
    );

const archiveButton =
    document.getElementById(
        "archiveButton"
    );


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
