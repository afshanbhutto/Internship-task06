// // pages/upload.js
// import { useState } from 'react';
// import firebase from '@/firbase';
// import { storage } from '@/firbase';

// const Upload = () =>{
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (file) {
//       const uploadTask = firebase.storage.ref(`files/${file.name}`).put(file);
//       uploadTask.on(
//         'state_changed',
//         null,
//         (error) => {
//           console.error(error);
//         },
//         () => {
//           console.log('File uploaded successfully!');
//         }
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Upload File</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default Upload