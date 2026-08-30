// ==========================================
// BIRTHDAY WEBSITE
// STEP 1
// ==========================================


console.log("SCRIPT BERHASIL DIMUAT");


// ==========================================
// CONFIG
// ==========================================

const CONFIG = {

    name: "Rhesa Alfian",

    password: "300802"

};


// ==========================================
// GET ELEMENTS
// ==========================================

const qrScreen =
    document.getElementById("qrScreen");

const loadingScreen =
    document.getElementById("loadingScreen");

const passwordScreen =
    document.getElementById("passwordScreen");

const simulateButton =
    document.getElementById("simulateButton");


// ==========================================
// CHECK ELEMENT
// ==========================================

console.log("QR Screen:", qrScreen);

console.log("Loading Screen:", loadingScreen);

console.log("Password Screen:", passwordScreen);

console.log("Button:", simulateButton);


// ==========================================
// QR CODE
// ==========================================

function createQR() {

    const qrImage =
        document.getElementById("qrImage");


    /*
        Untuk sementara QR dibuat menggunakan
        layanan QR image.

        Nanti setelah struktur website sudah
        stabil, QR scanner asli akan kita pasang.
    */

    const qrData =
        encodeURIComponent(
            "BIRTHDAY-" + CONFIG.name + "-2026"
        );


    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="
        + qrData;


    console.log("QR berhasil dibuat.");

}


// ==========================================
// SHOW SCREEN
// ==========================================

function showScreen(screen) {

    qrScreen.classList.add("hidden");

    loadingScreen.classList.add("hidden");

    passwordScreen.classList.add("hidden");

    screen.classList.remove("hidden");

}


// ==========================================
// SIMULATE QR SCAN
// ==========================================

function simulateScan() {

    console.log(
        "TOMBOL QR BERHASIL DIKLIK"
    );


    // Tampilkan loading

    showScreen(loadingScreen);


    // Tunggu 4 detik

    setTimeout(function() {

        console.log(
            "Loading selesai."
        );


        // Tampilkan password

        showScreen(passwordScreen);

    }, 4000);

}


// ==========================================
// BUTTON EVENT
// ==========================================

if (simulateButton) {

    simulateButton.addEventListener(
        "click",
        simulateScan
    );

} else {

    console.error(
        "BUTTON TIDAK DITEMUKAN!"
    );

}


// ==========================================
// PASSWORD
// ==========================================

let enteredPassword = "";


const passwordDots =
    document.querySelectorAll(
        "#passwordDots span"
    );

const numberButtons =
    document.querySelectorAll(
        ".key[data-number]"
    );


const clearButton =
    document.getElementById(
        "clearPassword"
    );


const deleteButton =
    document.getElementById(
        "deletePassword"
    );


// ==========================================
// UPDATE DOTS
// ==========================================

function updateDots() {

    passwordDots.forEach(
        function(dot, index) {

            if (
                index <
                enteredPassword.length
            ) {

                dot.classList.add(
                    "active"
                );

            } else {

                dot.classList.remove(
                    "active"
                );

            }

        }
    );

}


// ==========================================
// NUMBER BUTTON
// ==========================================

numberButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                if (
                    enteredPassword.length >= 6
                ) {

                    return;

                }


                enteredPassword +=
                    button.dataset.number;


                updateDots();


                if (
                    enteredPassword.length === 6
                ) {

                    setTimeout(
                        checkPassword,
                        300
                    );

                }

            }
        );

    }
);


// ==========================================
// CHECK PASSWORD
// ==========================================

function checkPassword() {

    if (
        enteredPassword ===
        CONFIG.password
    ) {

        passwordError.textContent =
            "Password benar ♡";

        passwordError.classList.add(
            "show"
        );

        console.log(
            "PASSWORD BENAR"
        );


        // Tunggu sebentar sebelum masuk
        // ke animasi kado

        setTimeout(function() {

            openGiftScreen();

        }, 1000);


    } else {

        passwordError.textContent =
            "Password salah ♡";

        passwordError.classList.add(
            "show"
        );

        enteredPassword = "";

        updateDots();

    }

}


// ==========================================
// CLEAR
// ==========================================

clearButton.addEventListener(
    "click",
    function() {

        enteredPassword = "";

        updateDots();

        passwordError.classList.remove(
            "show"
        );

    }
);


// ==========================================
// DELETE
// ==========================================

deleteButton.addEventListener(
    "click",
    function() {

        enteredPassword =
            enteredPassword.slice(
                0,
                -1
            );


        updateDots();

    }
);

function openGiftScreen() {

    console.log(
        "Membuka Gift Screen..."
    );

    showScreen(
        document.getElementById("giftScreen")
    );

}

// ==========================================
// GIFT
// ==========================================

const gift =
    document.getElementById("gift");

const openGiftButton =
    document.getElementById(
        "openGiftButton"
    );

const giftInstruction =
    document.getElementById(
        "giftInstruction"
    );


    function openGift() {

        if (!gift) {
            return;
        }
    
    
        // Buka kado
    
        gift.classList.add(
            "opened"
        );

        

        // ======================================
// AKTIFKAN BUNGA GLOBAL
// ======================================

const globalFlowers =
document.getElementById(
    "globalFlowers"
);

if (globalFlowers) {

globalFlowers.classList.add(
    "active"
);

}
    
    
        // Ubah tulisan
    
        if (giftInstruction) {
    
            giftInstruction.textContent =
                "Something beautiful is waiting for you ♡";
    
        }
    
    
        // Matikan tombol
    
        if (openGiftButton) {
    
            openGiftButton.textContent =
                "Opened ♡";
    
            openGiftButton.disabled =
                true;
    
        }
    
    
        // Tunggu animasi bunga selesai
    
        setTimeout(function() {
    
            const giftScreen =
                document.getElementById(
                    "giftScreen"
                );
    
            const section7 =
                document.getElementById(
                    "section7"
                );
    
    
            if (giftScreen) {
    
                giftScreen.classList.add(
                    "hidden"
                );
    
            }
    
    
            if (section7) {
    
                section7.classList.remove(
                    "hidden"
                );
    
            }
    
        }, 3000);
    
    }


if (openGiftButton) {

    openGiftButton.addEventListener(
        "click",
        openGift
    );

}

// ==========================================
// SECTION 7 CONTINUE
// ==========================================

const continueSection7 =
    document.getElementById(
        "continueSection7"
    );


if (continueSection7) {

    continueSection7.addEventListener(
        "click",
        function() {

            const section7 =
                document.getElementById(
                    "section7"
                );

            const section8 =
                document.getElementById(
                    "section8"
                );


            if (section7) {

                section7.classList.add(
                    "hidden"
                );

            }


            if (section8) {

                section8.classList.remove(
                    "hidden"
                );

            }

        }
    );

}


// ==========================================
// START
// ==========================================

createQR();

// ==========================================
// SECTION 8 → SECTION 9
// ==========================================

const continueSection8 =
    document.getElementById(
        "continueSection8"
    );


if (continueSection8) {

    continueSection8.addEventListener(
        "click",
        function() {

            const section8 =
                document.getElementById(
                    "section8"
                );

            const section9 =
                document.getElementById(
                    "section9"
                );


            if (section8) {

                section8.classList.add(
                    "hidden"
                );

            }


            if (section9) {

                section9.classList.remove(
                    "hidden"
                );

            }

        }
    );

}

// ==========================================
// SECTION 9 → SECTION 10
// ==========================================

const continueSection9 =
    document.getElementById(
        "continueSection9"
    );


if (continueSection9) {

    continueSection9.addEventListener(
        "click",
        function() {

            const section9 =
                document.getElementById(
                    "section9"
                );

            const section10 =
                document.getElementById(
                    "section10"
                );


            if (section9) {

                section9.classList.add(
                    "hidden"
                );

            }


            if (section10) {

                section10.classList.remove(
                    "hidden"
                );

            }

        }
    );

}

// ==========================================
// SECTION 10 → SECTION 11
// ==========================================

const continueSection10 =
    document.getElementById(
        "continueSection10"
    );


if (continueSection10) {

    continueSection10.addEventListener(
        "click",
        function() {

            const section10 =
                document.getElementById(
                    "section10"
                );

            const section11 =
                document.getElementById(
                    "section11"
                );


            if (section10) {

                section10.classList.add(
                    "hidden"
                );

            }


            if (section11) {

                section11.classList.remove(
                    "hidden"
                );

            }

        }
    );

}

// ==========================================
// SECTION 11 → SECTION 12
// ==========================================

const continueSection11 =
    document.getElementById(
        "continueSection11"
    );


if (continueSection11) {

    continueSection11.addEventListener(
        "click",
        function() {

            console.log(
                "Continue Section 11 → Section 12"
            );


            const section11 =
                document.getElementById(
                    "section11"
                );

            const section12 =
                document.getElementById(
                    "section12"
                );


            // Sembunyikan Section 11

            if (section11) {

                section11.classList.add(
                    "hidden"
                );

            }


            // Tampilkan Section 12

            if (section12) {

                section12.classList.remove(
                    "hidden"
                );

            }

        }
    );

}

// ==========================================
// SECTION 11 - MEMORY CABINET
// ==========================================

const memoryGallery =
    document.getElementById("memoryGallery");

const memoryCabinet =
    document.getElementById("memoryCabinet");

const cabinetPhoto =
    document.getElementById("cabinetPhoto");

const closeCabinet =
    document.getElementById("closeCabinet");

const previousMemory =
    document.getElementById("previousMemory");

const nextMemory =
    document.getElementById("nextMemory");

const memoryDots =
    document.getElementById("memoryDots");


// ==========================================
// MEMORY PHOTOS
// ==========================================

const memoryPhotos =
    document.querySelectorAll(
        ".memory-photo"
    );


// ==========================================
// MEMORY DATA
// ==========================================

const memories = [];

memoryPhotos.forEach(function(photo) {

    const image =
        photo.querySelector("img");

    if (image) {

        memories.push({
            src: image.src,
            alt: image.alt
        });

    }

});


let currentMemory = 0;


// ==========================================
// CREATE DOTS
// ==========================================

function createMemoryDots() {

    if (!memoryDots) {
        return;
    }

    memoryDots.innerHTML = "";

    memories.forEach(function(_, index) {

        const dot =
            document.createElement("span");

        dot.className =
            "memory-dot";

        if (index === currentMemory) {

            dot.classList.add(
                "active"
            );

        }

        memoryDots.appendChild(dot);

    });

}


// ==========================================
// UPDATE DOTS
// ==========================================

function updateMemoryDots() {

    const dots =
        document.querySelectorAll(
            ".memory-dot"
        );

    dots.forEach(
        function(dot, index) {

            dot.classList.toggle(
                "active",
                index === currentMemory
            );

        }
    );

}


// ==========================================
// SHOW MEMORY
// ==========================================

function showMemory(index) {

    if (
        !memories.length ||
        !cabinetPhoto
    ) {

        return;

    }


    currentMemory =
        (index + memories.length)
        % memories.length;


    cabinetPhoto.src =
        memories[currentMemory].src;

    cabinetPhoto.alt =
        memories[currentMemory].alt;


    updateMemoryDots();

}


// ==========================================
// OPEN CABINET
// ==========================================

function openMemoryCabinet(index) {

    if (!memoryCabinet) {
        return;
    }


    currentMemory = index;


    showMemory(
        currentMemory
    );


    // Sembunyikan gallery

    if (memoryGallery) {

        memoryGallery.style.opacity =
            "0";

        memoryGallery.style.pointerEvents =
            "none";

    }


    // Tampilkan lemari

    memoryCabinet.classList.remove(
        "hidden"
    );


    // Beri waktu agar animasi
    // bisa dimulai dengan halus

    requestAnimationFrame(function() {

        requestAnimationFrame(function() {

            memoryCabinet.classList.add(
                "opened"
            );

        });

    });

}


// ==========================================
// CLICK PHOTO
// ==========================================

memoryPhotos.forEach(
    function(photo, index) {

        photo.addEventListener(
            "click",
            function() {

                openMemoryCabinet(
                    index
                );

            }
        );

    }
);


// ==========================================
// NEXT
// ==========================================

if (nextMemory) {

    nextMemory.addEventListener(
        "click",
        function() {

            showMemory(
                currentMemory + 1
            );

        }
    );

}


// ==========================================
// PREVIOUS
// ==========================================

if (previousMemory) {

    previousMemory.addEventListener(
        "click",
        function() {

            showMemory(
                currentMemory - 1
            );

        }
    );

}


// ==========================================
// CLOSE CABINET
// ==========================================

function closeMemoryCabinet() {

    if (!memoryCabinet) {
        return;
    }


    memoryCabinet.classList.remove(
        "opened"
    );


    setTimeout(function() {

        memoryCabinet.classList.add(
            "hidden"
        );


        if (memoryGallery) {

            memoryGallery.style.opacity =
                "1";

            memoryGallery.style.pointerEvents =
                "auto";

        }

    }, 1500);

}


if (closeCabinet) {

    closeCabinet.addEventListener(
        "click",
        closeMemoryCabinet
    );

}


// ==========================================
// KEYBOARD
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            !memoryCabinet ||
            memoryCabinet.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        if (event.key === "ArrowRight") {

            showMemory(
                currentMemory + 1
            );

        }


        if (event.key === "ArrowLeft") {

            showMemory(
                currentMemory - 1
            );

        }


        if (event.key === "Escape") {

            closeMemoryCabinet();

        }

    }
);


// ==========================================
// INIT
// ==========================================

createMemoryDots();

// ==========================================
// SECTION 12 → SECTION 13
// ==========================================

const continueSection12 =
    document.getElementById(
        "continueSection12"
    );


if (continueSection12) {

    continueSection12.addEventListener(
        "click",
        function() {

            console.log(
                "Continue Section 12 → Section 13"
            );


            const section12 =
                document.getElementById(
                    "section12"
                );

            const section13 =
                document.getElementById(
                    "section13"
                );


            // Sembunyikan Section 12

            if (section12) {

                section12.classList.add(
                    "hidden"
                );

            }


            // Tampilkan Section 13

            if (section13) {

                section13.classList.remove(
                    "hidden"
                );

            }

        }
    );

}

// ==========================================
// SECTION 14 - REASONS I'M GRATEFUL
// ==========================================

const section14 =
    document.getElementById("section14");

const reasonBottle =
    document.getElementById("reasonBottle");

const shakeBottleButton =
    document.getElementById(
        "shakeBottleButton"
    );

const reasonText =
    document.getElementById("reasonText");

const reasonResult =
    document.getElementById(
        "reasonResult"
    );


// ==========================================
// REASONS DATA
// ==========================================

const gratitudeReasons = [

    "Your laugh is my favorite sound and it instantly makes my day better. ♡",

    "The way you remember the small things I say makes me feel so loved. ♡",

    "Your support during my bad days reminds me that I’m never alone.",

    "Going to concerts with you is my favorite kind of chaos and happiness. ♡",

    "Your spirit in the face of challenge inspires me every single day.",

];


// ==========================================
// RANDOM REASON
// ==========================================

let lastReasonIndex = -1;


function getRandomReason() {

    let randomIndex;

    do {

        randomIndex =
            Math.floor(
                Math.random() *
                gratitudeReasons.length
            );

    } while (
        randomIndex === lastReasonIndex &&
        gratitudeReasons.length > 1
    );


    lastReasonIndex =
        randomIndex;


    return gratitudeReasons[
        randomIndex
    ];

}


// ==========================================
// SHAKE BOTTLE
// ==========================================

function shakeBottle() {

    if (!reasonBottle) {
        return;
    }


    // Jangan bisa diklik berkali-kali
    // ketika animasi masih berlangsung

    if (
        reasonBottle.classList.contains(
            "shaking"
        )
    ) {

        return;

    }


    // Mulai animasi

    reasonBottle.classList.add(
        "shaking"
    );


    shakeBottleButton.disabled =
        true;


    // Tunggu animasi selesai

    setTimeout(function() {

        const newReason =
            getRandomReason();


        // Ganti teks

        reasonText.textContent =
            newReason;


        // Animasi result

        reasonResult.classList.remove(
            "pop"
        );


        void reasonResult.offsetWidth;


        reasonResult.classList.add(
            "pop"
        );


        // Selesai shaking

        reasonBottle.classList.remove(
            "shaking"
        );


        shakeBottleButton.disabled =
            false;


    }, 750);

}


// ==========================================
// BUTTON
// ==========================================

if (shakeBottleButton) {

    shakeBottleButton.addEventListener(
        "click",
        shakeBottle
    );

}

// ==========================================
// FINAL BIRTHDAY - CLOSE WEBSITE
// ==========================================

const closeWebsiteButton =
    document.getElementById(
        "closeWebsiteButton"
    );


if (closeWebsiteButton) {

    closeWebsiteButton.addEventListener(
        "click",
        function() {

            console.log(
                "Closing birthday website..."
            );


            // Coba menutup tab/window

            window.close();


            // Jika browser tidak mengizinkan
            // window.close(), tampilkan halaman kosong

            setTimeout(function() {

                document.body.innerHTML = "";

                document.body.style.background =
                    "#fffaf5";

            }, 300);

        }
    );

}

// ==========================================
// SECTION 13 → SECTION 14
// ==========================================

const continueSection13 =
    document.getElementById("continueSection13");


if (continueSection13) {

    continueSection13.addEventListener(
        "click",
        function() {

            const section13 =
                document.getElementById("section13");

            const section14 =
                document.getElementById("section14");


            if (section13) {

                section13.classList.add("hidden");

            }


            if (section14) {

                section14.classList.remove("hidden");

            }

        }
    );

}

// ==========================================
// SECTION 13 - MUSIC PLAYER
// ==========================================

const birthdayAudio =
    document.getElementById("birthdayAudio");

const playPauseSong =
    document.getElementById("playPauseSong");

const previousSong =
    document.getElementById("previousSong");

const nextSong =
    document.getElementById("nextSong");

const previewMusic =
    document.getElementById("previewMusic");

const currentSongTitle =
    document.getElementById("currentSongTitle");

const currentSongArtist =
    document.getElementById("currentSongArtist");

const currentTime =
    document.getElementById("currentTime");

const songDuration =
    document.getElementById("songDuration");

const musicProgressBar =
    document.getElementById("musicProgressBar");

const playlistCards =
    document.querySelectorAll(".playlist-card");


// ==========================================
// SONG DATA
// ==========================================

const songs = [

    {
        title: "Perfect",
        artist: "Ed Sheeran",
        file: "./music/perfect.mp3"
    },

    {
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        file: "./music/until-i-found-you.mp3"
    },

    {
        title: "A Thousand Years",
        artist: "Christina Perri",
        file: "./music/a-thousand-years.mp3"
    }

];


// ==========================================
// CURRENT SONG
// ==========================================

let currentSong = 0;


// ==========================================
// LOAD SONG
// ==========================================

function loadSong(index) {

    if (!birthdayAudio) {
        return;
    }

    if (!songs[index]) {
        return;
    }

    currentSong = index;

    const song = songs[currentSong];


    birthdayAudio.src =
        song.file;


    if (currentSongTitle) {

        currentSongTitle.textContent =
            song.title;

    }


    if (currentSongArtist) {

        currentSongArtist.textContent =
            song.artist;

    }


    if (currentTime) {

        currentTime.textContent =
            "0:00";

    }


    if (songDuration) {

        songDuration.textContent =
            "0:00";

    }


    if (musicProgressBar) {

        musicProgressBar.style.width =
            "0%";

    }


    console.log(
        "Song loaded:",
        song.title
    );

}


// ==========================================
// PLAY / PAUSE
// ==========================================

function toggleMusic() {

    if (!birthdayAudio) {
        return;
    }


    if (birthdayAudio.paused) {

        birthdayAudio.play()
            .then(function() {

                if (playPauseSong) {

                    playPauseSong.textContent =
                        "❚❚";

                }

            })
            .catch(function(error) {

                console.log(
                    "Musik tidak dapat diputar:",
                    error
                );

            });

    } else {

        birthdayAudio.pause();


        if (playPauseSong) {

            playPauseSong.textContent =
                "▶";

        }

    }

}


// ==========================================
// PLAYLIST CLICK
// ==========================================

playlistCards.forEach(
    function(card) {

        card.addEventListener(
            "click",
            function() {

                const songIndex =
                    Number(
                        card.dataset.song
                    );


                loadSong(songIndex);


                if (birthdayAudio) {

                    birthdayAudio.play()
                        .then(function() {

                            if (playPauseSong) {

                                playPauseSong.textContent =
                                    "❚❚";

                            }

                        })
                        .catch(function(error) {

                            console.log(
                                "Browser meminta interaksi pengguna:",
                                error
                            );

                        });

                }

            }
        );

    }
);


// ==========================================
// PLAY BUTTON
// ==========================================

if (playPauseSong) {

    playPauseSong.addEventListener(
        "click",
        toggleMusic
    );

}


// ==========================================
// NEXT SONG
// ==========================================

if (nextSong) {

    nextSong.addEventListener(
        "click",
        function() {

            currentSong++;

            if (
                currentSong >=
                songs.length
            ) {

                currentSong = 0;

            }


            loadSong(currentSong);


            birthdayAudio.play()
                .then(function() {

                    if (playPauseSong) {

                        playPauseSong.textContent =
                            "❚❚";

                    }

                });

        }
    );

}


// ==========================================
// PREVIOUS SONG
// ==========================================

if (previousSong) {

    previousSong.addEventListener(
        "click",
        function() {

            currentSong--;

            if (currentSong < 0) {

                currentSong =
                    songs.length - 1;

            }


            loadSong(currentSong);


            birthdayAudio.play()
                .then(function() {

                    if (playPauseSong) {

                        playPauseSong.textContent =
                            "❚❚";

                    }

                });

        }
    );

}


// ==========================================
// MUSIC PROGRESS
// ==========================================

if (birthdayAudio) {

    birthdayAudio.addEventListener(
        "timeupdate",
        function() {

            if (!birthdayAudio.duration) {
                return;
            }


            const progress =
                (
                    birthdayAudio.currentTime /
                    birthdayAudio.duration
                ) * 100;


            if (musicProgressBar) {

                musicProgressBar.style.width =
                    progress + "%";

            }


            if (currentTime) {

                currentTime.textContent =
                    formatTime(
                        birthdayAudio.currentTime
                    );

            }

        }
    );

}


// ==========================================
// DURATION
// ==========================================

if (birthdayAudio) {

    birthdayAudio.addEventListener(
        "loadedmetadata",
        function() {

            if (songDuration) {

                songDuration.textContent =
                    formatTime(
                        birthdayAudio.duration
                    );

            }

        }
    );

}


// ==========================================
// SONG ENDED
// ==========================================

if (birthdayAudio) {

    birthdayAudio.addEventListener(
        "ended",
        function() {

            currentSong++;

            if (
                currentSong >=
                songs.length
            ) {

                currentSong = 0;

            }


            loadSong(currentSong);


            birthdayAudio.play();


            if (playPauseSong) {

                playPauseSong.textContent =
                    "❚❚";

            }

        }
    );

}


// ==========================================
// FORMAT TIME
// ==========================================

function formatTime(seconds) {

    if (
        !seconds ||
        isNaN(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        Math.floor(
            seconds % 60
        );


    return (
        minutes +
        ":" +
        String(
            remainingSeconds
        ).padStart(2, "0")
    );

}


// ==========================================
// PREVIEW BUTTON
// ==========================================

if (previewMusic) {

    previewMusic.addEventListener(
        "click",
        function() {

            if (!birthdayAudio) {
                return;
            }


            if (birthdayAudio.paused) {

                birthdayAudio.play()
                    .then(function() {

                        if (playPauseSong) {

                            playPauseSong.textContent =
                                "❚❚";

                        }

                    });

            } else {

                birthdayAudio.pause();


                if (playPauseSong) {

                    playPauseSong.textContent =
                        "▶";

                }

            }

        }
    );

}


// ==========================================
// INITIAL SONG
// ==========================================

loadSong(0);

