export default function Promises() {
    let AvengerEndGame=new Promise((resolve,reject)=>{
        let success=true;
        if(success){
            resolve("Movie is On");
        }
        else{
            reject("Movei is Off");
        }
    });
    AvengerEndGame
        .then((msg)=> console.log(msg))
        .catch((err)=> console.log(err));
    return(
        <div>
            Check console for Output
        </div>
    );
}
