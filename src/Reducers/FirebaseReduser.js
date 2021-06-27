import firebase from '../firebaseFunc';

let userData = [
    {
        id: "-Md6jvwh6Ihe1ujr4FIX",
        FirstName: "Misha",
        LastName: "Gyozalyan",
        Age: "44"
    },
    {
        id: "-Md6y-aebjeWqaGIaGL9",
        FirstName: "fdgd",
        LastName: "gfh",
        Age: "33"
    },
    {
        id: "-Md7C0xIsuRtjL2DwXhu",
        FirstName: "fd",
        LastName: "dds",
        Age: "2"
    }
];

    // const fireStore = firebase.database().ref('/UserInfo')
    // fireStore.on('value',(response)=>{
    //     const data = response.val();
    //     let userInfo = [];
    //     for(let id in data){
    //         userInfo.push({
    //             id:id,
    //             FirstName: data[id].FirstName,
    //             LastName: data[id].LastName,
    //             Age: data[id].Age,
    //         });

    //     }

    //     userData = userInfo
    //     console.log(userData,'sssssssaaaaaaaaaaaaaaaa')


    // })

const firebaseRed = (state = userData, action) =>{
    console.log('FFFFFFFFFFFFFF')
    switch(action.type) {
        case "ADD_NEW_USER":
            console.log('CREATEEEEEEEEEEEE',action)
            return state;
        case "ADD_USER_ERROR":
            console.log("ADD USER ERROR",action.err)
            return state;
        default:
            return state;

    }
}

export default firebaseRed;