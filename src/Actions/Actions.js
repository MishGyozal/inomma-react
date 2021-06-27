export const AddNewUser =  (user) =>{
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(firestore,'XXXXXXXXXXXXXXXXXXXXXXXXXX')
        firestore.collection('UserInfo').add({
            FirstName:user.FirstName,
            LastName: user.LastName,
            Age: user.Age,
        }).then(()=>{
            dispatch(
                {
                    type: 'ADD_NEW_USER',
                    FirstName:user.FirstName,
                    LastName: user.LastName,
                    Age: user.Age
                }
              )
        }).catch((err) => {
            dispatch({type: 'ADD_USER_ERROR',err})
        })
    
    }
}

// export const UpdateUser =  (author, text, datetime) =>{
//     console.log(author,'FFFFFFFFFFF')
//     return {
//         type: 'ADD_NEW_MESSAGE',
//         author,
//         text,
//         datetime
//     }
// }

// export const DeleteUser =  (userId) =>{
//     console.log(author,'FFFFFFFFFFF')
//     return {
//         type: 'ADD_NEW_MESSAGE',
//         userId
//     }
// }
