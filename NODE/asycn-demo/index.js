// newFunction();
// function newFunction() {
//   console.log('before');
//   setTimeout(() => {
//     console.log('users are taking data from data base');
//   }, 2000);

//   console.log('after');
// }
// getUser(1,(user)=>{
//   getRepositories(user.gitHubUserName,(repos)=>{
//     console.log('repo',repos);
// });
// });
// function getUser(id,callback){
//   setTimeout(()=>{
//     console.log('reading from database')
//     callback({id:id,githhubUser:"user"})
//   },2000);
// }
// function getRepositories(user,callback){
//   setTimeout(()=>{
//     console.log('getting repos from github');
//     callback(['repo1','repo2']);
//   })
// }
    /*getUser(1,(user)=>{
     // console.log('user-name',user);
      githrepo(user.githhubUser,(respo)=>{
        console.log('repos',respo);
      })
    })
  function getUser(id,callback){
            setTimeout(()=>{
              console.log('reading from database');
              callback({id:id,githhubUser:"Sujit Yadav"});
            });
  }
  function githrepo(username,callback){
    setTimeout(()=>{
      console.log('getting repos from github');
      callback(['repo1','repo2','repo3','repo4','repo5','repo6']);
      },100);
  }  this is call back hell*/ 
   getUser(1,(user)=>{
    console.log('user-name',user);;
    githrepo(user.githhubUser,(respo)=>{
      console.log('repos',respo);
   })
  });
    function getUser(id,callback){
    setTimeout(()=>{
      console.log("connecting to databases of github...");
      callback({id:id,githhubUser:"Sujit Yadav"});
    },1000);
  }
  function githrepo(username,callback){
    setTimeout(()=>{
      console.log("connecting from githhub");
      callback("repo1","repo2","repo3");
    },2000)
  }
   
const promiseone=new Promise((response,reject)=>{
  setTimeout(()=>{
     const error=true;
     if(error){
      response({id:786,name:"roshan gandu"});
     }else{
      reject("there is somethings");
     }
  });
}).then((user)=>{
  console.log("id is",user.id);
  console.log('name is',user.name);
}).catch((error)=>{
  console.log("this is catch",error);
})
async function getu(){
  try{
    const user=await promiseone;
    console.log(user);
  }catch{
    console.log("this is catch",error);
  }
}
  