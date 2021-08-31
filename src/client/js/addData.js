// function addData(event) {
//     event.preventDefault();

//     const postData = async (url = '', data={})=>{
//         console.log(data);
//         const response = await fetch(url, {
//             method: 'POST', 
//             mode: "no-cors",
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
    
//         try {
//             const newData = await response.json();
//             console.log(newData);
//             return newData;
//         }catch(error) {
//             console.log("error", error);
//         }
//     }

//     postData('http://localhost:8082/addData', {body:{animal:"turtle", score:7}});

//     // check what text was put into the form field
//     //let formText = document.getElementById('name').value
//     //console.log(formText);

//    // function onGenerate(e){
    
//  //}  
   
// }

const addData = async () => {
    const request = await fetch('localhost:8082/url');
    try{
    const urlData = await request.json();
    console.log(urlData);
    return urlData;
     
    }catch(error){
        console.log("error", error);
    }
   
}

export { addData}
