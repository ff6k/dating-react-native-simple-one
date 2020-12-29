// import React, { useState } from 'react'
// import CodePhone from './codePhone'
// import ConfirmCodePhone from '/src/components/ConfirmCodePhone/confirmCodePhone'
// import auth from '@react-native-firebase/auth';
// import Utils from '/src/utils'
// import { Alert } from 'react-native';

// /**
//  * confirm wrong code: Finish
//  */
// export default function CodePhoneController() {

//     const [confirm, setConfirm] = useState(null);
//     const [isSuccess, setIsSuccess] = useState(null)

//     function signInWithPhoneNumber(phoneNumber) {
//         const isPhone = Utils.ValidateInput.validatePhoneNumber(phoneNumber)
//         if (isPhone) {
//             auth()
//                 .signInWithPhoneNumber(phoneNumber)
//                 .then(confirmResult => {
//                     auth().onAuthStateChanged((user) => {
//                         if (user) {
//                             const id = auth().currentUser.uid
//                         } else {
//                             setConfirm(confirmResult)
//                         }
//                     })
//                 })
//                 .catch(error => console.log(error))
//         }
//         else {
//             Alert.alert("Incorrect format phone number!!")
//         }
//     }

//     //TODO: error
//     function confirmCode(code) {
//         confirm.confirm(code)
//             .then(
//                 user => console.log("user", user)
//             )
//             .catch(
//                 error => console.log("error", error)
//             )
//     }

//     const getCode = (code) => {
//         confirmCode(code)
//     }

//     if (!confirm) {
//         return (
//             <CodePhone onSendCodePhone={signInWithPhoneNumber} />
//         );
//     }
//     return (
//         <ConfirmCodePhone getCode={getCode} isSuccess={isSuccess} />
//     );
// }
