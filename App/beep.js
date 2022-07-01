a = new AudioContext({latencyHint: 'interactive',sampleRate: 44100,}) // browsers limit the number of concurrent audio contexts, so you better re-use'em

function beep(vol, freq, duration) {
    console.log({ vol, freq, duration })
    v = a.createOscillator()
    u = a.createGain()
    v.connect(u)
    v.frequency.value = freq
    v.type = "circle"
    u.connect(a.destination)
    u.gain.value = vol * 0.0002
    v.start(a.currentTime)
    v.stop(a.currentTime + duration * 0.001)
}