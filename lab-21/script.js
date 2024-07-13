const songs = [
  {
    id: 1,
    title: "Lời mẹ nói",
    artist: "Zyboy Trung Vũ",
    src: "songs/Lời mẹ nói.mp3",
    cover: "image/lời_mẹ_nói.jpg",
  },
  {
    id: 2,
    title: "5:20 AM",
    artist: "Đao Tương",
    src: "songs/5_20AM - Đao Tương.mp3",
    cover: "image/5.20.jpg",
  },
  {
    id: 3,
    title: "Bài hát được viết bởi thần linh",
    artist: "K.D",
    src: "songs/BaiHatDuocVietBoiThanLinh.mp3",
    cover: "image/Shen_Ling.jpg",
  },
];

const audio = document.querySelector("#audio");
let currentSongIndex = 0;
let isPlaying = false;
let isRepeat = false;
let isMuted = false;

function initSong() {
  const song = songs[currentSongIndex];
  audio.src = song.src;

  const cover = document.querySelector(".cover");
  cover.src = song.cover;

  const title = document.querySelector(".title");
  title.textContent = song.title;

  const artist = document.querySelector(".artist");
  artist.textContent = song.artist;

  document.title = `${song.title} - ${song.artist}`;

  if (isPlaying) {
    audio.play();
  }
  updateSongList();
}

function isPaused() {
  return audio.paused;
}

function handleClickPrev() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  initSong();
}

function handleClickNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  initSong();
}

function onPlay() {
  isPlaying = true;

  const play = document.querySelector(".play");
  play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
</svg>`;
}

function onOff() {
  isPlaying = false;

  const play = document.querySelector(".play");
  play.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-play-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
            />
            <path
              d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"
            />
          </svg>`;
}

function handleClickPlay() {
  if (isPaused()) {
    audio.play();
  } else {
    audio.pause();
  }
}

function repeat() {
  isRepeat = true;
  const repeat = document.querySelector(".repeat");
  repeat.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-repeat-1" viewBox="0 0 16 16">
  <path d="M11 4v1.466a.25.25 0 0 0 .41.192l2.36-1.966a.25.25 0 0 0 0-.384l-2.36-1.966a.25.25 0 0 0-.41.192V3H5a5 5 0 0 0-4.48 7.223.5.5 0 0 0 .896-.446A4 4 0 0 1 5 4zm4.48 1.777a.5.5 0 0 0-.896.446A4 4 0 0 1 11 12H5.001v-1.466a.25.25 0 0 0-.41-.192l-2.36 1.966a.25.25 0 0 0 0 .384l2.36 1.966a.25.25 0 0 0 .41-.192V13h6a5 5 0 0 0 4.48-7.223Z"/>
  <path d="M9 5.5a.5.5 0 0 0-.854-.354l-1.75 1.75a.5.5 0 1 0 .708.708L8 6.707V10.5a.5.5 0 0 0 1 0z"/>
</svg>`;
}

function noRepeat() {
  isRepeat = false;
  const noRepeat = document.querySelector(".repeat");
  noRepeat.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-repeat" viewBox="0 0 16 16">
  <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
</svg>`;
}

function handleClickRepeat() {
  if (isRepeat) {
    noRepeat();
    isRepeat = false;
  } else {
    repeat();
    isRepeat = true;
  }
}

function toggleVolume() {
  if (audio.volume === 0) {
    audio.volume = 1;
    volumeOn();
  } else {
    audio.volume = 0;
    volumeOff();
  }
}

function volumeOn() {
  const volumeOn = document.querySelector(".volume");
  volumeOn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
</svg>`;
}

function volumeOff() {
  const volumeOff = document.querySelector(".volume");
  volumeOff.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
</svg>`;
}

function onTimeUpdate() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;

  const currentTimeE = document.querySelector(".current-time");
  const progressBarE = document.querySelector(".progress-bar");

  currentTimeE.textContent = formatTime(currentTime);
  progressBarE.value = progress;
}

function onDurationChange() {
  const duration = audio.duration;
  const durationE = document.querySelector(".duration");
  durationE.textContent = formatTime(duration);

  const progressBarE = document.querySelector(".progress-bar");
  progressBarE.value = 0;
}

function onSeek(event) {
  const seekTime = (event.target.value * audio.duration) / 100;
  audio.currentTime = seekTime;
}

function playNextSong() {
  if (!isRepeat) {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  initSong();
  if (isPlaying) {
    audio.play();
  } else {
    audio.addEventListener("canplay", function onCanPlay() {
      audio.removeEventListener("canplay", onCanPlay);
      audio.play();
    });
  }
}

function initSongList() {
  const songListElement = document.querySelector(".song-list");
  songListElement.innerHTML = "";

  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${song.title} - ${song.artist}`;

    if (index === currentSongIndex) {
      listItem.classList.add("current-song");
    }

    listItem.addEventListener("click", () => {
      currentSongIndex = index;
      initSong();
    });

    songListElement.appendChild(listItem);
  });
}

initSongList();

function updateSongList() {
  const songListItems = document.querySelectorAll(".song-list li");

  songListItems.forEach((item, index) => {
    if (index === currentSongIndex) {
      item.classList.add("current-song");
    } else {
      item.classList.remove("current-song");
    }
  });
}

function setUpPlayer() {
  initSong();

  const prev = document.querySelector(".prev");
  const play = document.querySelector(".play");
  const next = document.querySelector(".next");
  const progressBar = document.querySelector(".progress-bar");
  const repeatBtn = document.querySelector(".repeat");
  const volumeBtn = document.querySelector(".volume");

  prev.addEventListener("click", handleClickPrev);
  play.addEventListener("click", handleClickPlay);
  next.addEventListener("click", handleClickNext);
  progressBar.addEventListener("input", onSeek);
  repeatBtn.addEventListener("click", handleClickRepeat);
  volumeBtn.addEventListener("click", toggleVolume);

  audio.addEventListener("play", onPlay);
  audio.addEventListener("pause", onOff);
  audio.addEventListener("timeupdate", onTimeUpdate);
  audio.addEventListener("durationchange", onDurationChange);
  audio.addEventListener("ended", playNextSong);
  progressBar.value = 0;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  return formattedTime;
}

setUpPlayer();
