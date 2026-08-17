/*
    SCP-9221 — Навигация

    Каждая кнопка имеет собственную ссылку.
*/


/* =========================================================
   ССЫЛКИ
========================================================= */

const DOCUMENT_URL =
    "https://example.com/document";

const ARCHIVE_URL =
    "https://example.com/archive";


/* =========================================================
   КНОПКИ
========================================================= */

const documentButton =
    document.getElementById("documentButton");

const archiveButton =
    document.getElementById("archiveButton");


/* =========================================================
   ПЕРЕХОД НА ДОКУМЕНТ
========================================================= */

documentButton.addEventListener(
    "click",
    () => {

        window.top.location.href =
            DOCUMENT_URL;

    }
);


/* =========================================================
   ПЕРЕХОД В АРХИВ
========================================================= */

archiveButton.addEventListener(
    "click",
    () => {

        window.top.location.href =
            ARCHIVE_URL;

    }
);
