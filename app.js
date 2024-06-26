// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js'
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDWI7o92ACl-sTy9HLO_hcwqF6Fq04fzlo',
  authDomain: 'integguyssignupwebsitedemo.firebaseapp.com',
  projectId: 'integguyssignupwebsitedemo',
  storageBucket: 'integguyssignupwebsitedemo.appspot.com',
  messagingSenderId: '288035422532',
  appId: '1:288035422532:web:00ebaadd4487223ce01711',
  measurementId: 'G-2T6PP9LGR6',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const db = getDatabase(app)

const registerAccount = document.querySelector('.register-btn')
const name = document.querySelector('.name')
const useremail = document.querySelector('.email')
const userpassword = document.querySelector('.password')

registerAccount.addEventListener('click', () => {
  const userID = generateUUID()
  set(ref(db, 'integuys/account/' + userID), {
    id: userID,
    username: name.value,
    email: useremail.value,
    userpassword: userpassword.value,
  })

  name.value = ''
  useremail.value = ''
  userpassword.value = ''
  alert('Account Created Successfully')
})

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

// Generate a UUID
