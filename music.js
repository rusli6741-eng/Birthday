// ==========================================
// SECTION 13 - MUSIC PLAYER
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("MUSIC.JS BERHASIL DIMUAT");

    // ==========================================
    // AUDIO
    // ==========================================

    const audio = new Audio();

    audio.preload = "metadata";


    // ==========================================
    // DAFTAR LAGU
    // ==========================================

    const songs = [

        {
            title: "Overnight",
            artist: "Kita Lewati Berdua",
            src: "./lagu1.mp3"
        },

        {
            title: "Kita Buat Menyenangkan",
            artist: "Bernadya",
            src: "./lagu2.mp3"
        },

        {
            title: "Jatuh Suka",
            artist: "TULUS",
            src: "./lagu3.mp3"
        }

    ];


    // ==========================================
    // ELEMENT
    // ==========================================

    const playButton =
        document.getElementById("playPauseSong");

    const previousButton =
        document.getElementById("previousSong");

    const nextButton =
        document.getElementById("nextSong");

    const songTitle =
        document.getElementById("currentSongTitle");

    const songArtist =
        document.getElementById("currentSongArtist");

    const currentTime =
        document.getElementById("currentTime");

    const songDuration =
        document.getElementById("songDuration");

    const progressBar =
        document.getElementById("musicProgressBar");

    const playlistCards =
        document.querySelectorAll(".playlist-card");


    // ==========================================
    // CURRENT SONG
    // ==========================================

    let currentSong = 0;


    // ==========================================
    // LOAD SONG
    // ==========================================

    function loadSong(index) {

        if (!songs[index]) {
            return;
        }

        currentSong = index;

        const song = songs[currentSong];

        console.log(
            "MEMUAT LAGU:",
            song.title
        );


        // Ganti audio

        audio.src = song.src;

        audio.load();


        // Ganti judul

        if (songTitle) {

            songTitle.textContent =
                song.title;

        }


        // Ganti artist

        if (songArtist) {

            songArtist.textContent =
                song.artist;

        }


        // Reset waktu

        if (currentTime) {

            currentTime.textContent =
                "0:00";

        }


        if (songDuration) {

            songDuration.textContent =
                "0:00";

        }


        // Reset progress

        if (progressBar) {

            progressBar.style.width =
                "0%";

        }


        // Tandai playlist aktif

        playlistCards.forEach(
            function (card) {

                card.classList.remove(
                    "active"
                );

            }
        );


        const activeCard =
            document.querySelector(
                '.playlist-card[data-song="' +
                currentSong +
                '"]'
            );


        if (activeCard) {

            activeCard.classList.add(
                "active"
            );

        }


        // Tombol kembali ke Play

        if (playButton) {

            playButton.textContent =
                "▶";

        }

    }


    // ==========================================
    // PLAY / PAUSE
    // ==========================================

    if (playButton) {

        playButton.addEventListener(
            "click",
            function () {

                if (audio.paused) {

                    audio.play()
                        .then(function () {

                            playButton.textContent =
                                "❚❚";

                        })
                        .catch(function (error) {

                            console.error(
                                "Gagal play:",
                                error
                            );

                        });

                } else {

                    audio.pause();

                    playButton.textContent =
                        "▶";

                }

            }
        );

    }


    // ==========================================
    // NEXT SONG
    // ==========================================

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                console.log(
                    "NEXT DIKLIK"
                );


                let nextIndex =
                    currentSong + 1;


                // Jika sudah lagu terakhir,
                // kembali ke lagu pertama

                if (
                    nextIndex >=
                    songs.length
                ) {

                    nextIndex = 0;

                }


                loadSong(nextIndex);


                // Langsung putar

                audio.play()
                    .then(function () {

                        if (playButton) {

                            playButton.textContent =
                                "❚❚";

                        }

                        console.log(
                            "NEXT PLAY:",
                            songs[nextIndex].title
                        );

                    })
                    .catch(function (error) {

                        console.error(
                            "Gagal memainkan lagu berikutnya:",
                            error
                        );

                    });

            }
        );

    } else {

        console.error(
            "TOMBOL nextSong TIDAK DITEMUKAN!"
        );

    }


    // ==========================================
    // PREVIOUS SONG
    // ==========================================

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function () {

                console.log(
                    "PREVIOUS DIKLIK"
                );


                let previousIndex =
                    currentSong - 1;


                if (
                    previousIndex < 0
                ) {

                    previousIndex =
                        songs.length - 1;

                }


                loadSong(previousIndex);


                audio.play()
                    .then(function () {

                        if (playButton) {

                            playButton.textContent =
                                "❚❚";

                        }

                    })
                    .catch(function (error) {

                        console.error(
                            "Gagal memainkan lagu sebelumnya:",
                            error
                        );

                    });

            }
        );

    }


    // ==========================================
    // PLAYLIST CARD
    // ==========================================

    playlistCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const index =
                        Number(
                            card.dataset.song
                        );


                    if (
                        isNaN(index) ||
                        !songs[index]
                    ) {

                        return;

                    }


                    loadSong(index);


                    audio.play()
                        .then(function () {

                            if (playButton) {

                                playButton.textContent =
                                    "❚❚";

                            }

                        })
                        .catch(function (error) {

                            console.error(
                                "Playlist gagal dimainkan:",
                                error
                            );

                        });

                }
            );

        }
    );


    // ==========================================
    // PROGRESS
    // ==========================================

    audio.addEventListener(
        "timeupdate",
        function () {

            if (!audio.duration) {
                return;
            }


            const progress =
                (
                    audio.currentTime /
                    audio.duration
                ) * 100;


            if (progressBar) {

                progressBar.style.width =
                    progress + "%";

            }


            if (currentTime) {

                currentTime.textContent =
                    formatTime(
                        audio.currentTime
                    );

            }

        }
    );


    // ==========================================
    // DURATION
    // ==========================================

    audio.addEventListener(
        "loadedmetadata",
        function () {

            if (songDuration) {

                songDuration.textContent =
                    formatTime(
                        audio.duration
                    );

            }

        }
    );


    // ==========================================
    // LAGU SELESAI
    // ==========================================

    audio.addEventListener(
        "ended",
        function () {

            let nextIndex =
                currentSong + 1;


            if (
                nextIndex >=
                songs.length
            ) {

                nextIndex = 0;

            }


            loadSong(nextIndex);


            audio.play()
                .then(function () {

                    if (playButton) {

                        playButton.textContent =
                            "❚❚";

                    }

                });

        }
    );


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

        const secs =
            Math.floor(
                seconds % 60
            );

        return (
            minutes +
            ":" +
            String(secs).padStart(
                2,
                "0"
            )
        );

    }


    // ==========================================
    // START
    // ==========================================

    loadSong(0);

});

