import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
let
  resolve,
  firebaseInstance,
  firestoreInstance

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_PROJECT_ID,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  storageBucket: import.meta.env.PUBLIC_STORAGE_BUCKET,
  appId: import.meta.env.PUBLIC_APP_ID,
}


const promise = new Promise(res => resolve = res)

export async function initialize () {
  console.log(firebaseConfig)
  if (import.meta.env.SSR) return undefined
  if (firebaseInstance) return firebaseInstance

  firebaseInstance = initializeApp(firebaseConfig)
  resolve(firebaseInstance)
  return firebaseInstance
}

export async function getInstance () {
  if (import.meta.env.SSR) return undefined
  if (firebaseInstance) return firebaseInstance
  return promise
}

export async function getFirestoreInstance () {
  
  if (firestoreInstance) return firestoreInstance

  await getInstance()
  firestoreInstance = getFirestore()
  return firestoreInstance
}

export default {
  initialize,
  getInstance,
  getFirestoreInstance,
}