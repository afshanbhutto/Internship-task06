import React from 'react'
import {useState, useRef } from 'react';
import firebase from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import Link from 'next/link';
import{ref} from 'firebase/storage'
import {auth, storage} from './Firebase'


const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    //added after 
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => setFile(e.target.files[0]);
// remove abovev
    const handleSignup = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;


          // added after
          // Upload the file to Firebase Storage
      const storageRef = firebase.storage.ref();
      const fileRef = storageRef.child(file.name);
       fileRef.put(file);

      // Access the file URL
      const fileURL =  fileRef.getDownloadURL();
/// remove above


          alert("Signup Successful")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          console.log(error)
          // ..
        });
    }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <center>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            SignUp here
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  ref={emailRef}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <input type="file" onChange={handleFileChange} />
            <div>
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  ref={passwordRef}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                className='class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                type="submit"
              >
                Signup
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            href={"/login"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
        </div>
        
      </center>
    </div>
  );
}

export default Signup
