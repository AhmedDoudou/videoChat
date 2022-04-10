const APP_ID = '7cd7f636232947579d8947accd415dd2'
const CHANNEL = 'home'
const TEKON = '0067cd7f636232947579d8947accd415dd2IAAAhHQwMsipPpQKsJqxckyEeMvh/k3bvk1YwH1ueY1zfNAM1nEAAAAAEAC5Yzmx7XFTYgEAAQDtcVNi'
let UID

console.log('streams.js connected')

const client = agoraRTC.createClient({mode: 'rtc' , codec:'vp8'})

let localTracks = []
let remoteUsers = {}
let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, UID)

    localTracks = await AgoraRTC.createMicrophoneAudioTrack();

    let player  = `<div class="video-container" id="user-container-${UID}">
            <div class="video-player" id="user-${UID}"></div> 
            <div class="username-wrapper"><span class="user-name">Dennis Ivanov</span></div>
        </div>`

    document.getElementById('video-streams').insertAdjacentElement('beforeend', player)

    localTracks[1].play(`user-${UID}`)
    await client.publish(localTracks[0], localTracks[1]);
}

joinAndDisplayLocalStream()



