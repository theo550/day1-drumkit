window.addEventListener('keydown', drum)
window.addEventListener('keyup', reset)

function drum(keyword) {
  switch(keyword.key) {
    case "a": 
      document.querySelectorAll('.drum')[0].classList.add('playing')
      let sond1 = new Audio ('CYCdh_K2room_Flam-02.wav')
      sond1.play()
      break
    case "z": 
      document.querySelectorAll('.drum')[1].classList.add('playing')
      let sond2 = new Audio ('Acoustic Snare-01.wav')
      sond2.play()
      break
    case "e": 
      document.querySelectorAll('.drum')[2].classList.add('playing')
      sond3 = new Audio ('Acoustic Snare-02.wav')
      sond3.play()
      break
    case "r": 
      document.querySelectorAll('.drum')[3].classList.add('playing')
      sond4 = new Audio ('CYCdh_K4-Kick05.wav')
      sond4.play()
      break
    case "t": 
      document.querySelectorAll('.drum')[4].classList.add('playing')
      sond5 = new Audio ('CYCdh_K4-OpHat01.wav')
      sond5.play()
      break
    case "y": 
      document.querySelectorAll('.drum')[5].classList.add('playing')
      sond6 = new Audio ('CYCdh_TamRimTgt-02.wav')
      sond6.play()
      break
    case "u": 
      document.querySelectorAll('.drum')[6].classList.add('playing')
      sond7 = new Audio ('KHats Open-09.wav')
      sond7.play()
      break
    case "i": 
      document.querySelectorAll('.drum')[7].classList.add('playing')
      sond8 = new Audio ('CYCdh_VinylK5-Kick01.wav')
      sond8.play()
      break
    case "o": 
      document.querySelectorAll('.drum')[8].classList.add('playing')
      sond9 = new Audio ('CYCdh_K2room_Flam-02.wav')
      sond9.play()
      break

}
}

function reset() {
  for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].classList.remove('playing')
  }
}