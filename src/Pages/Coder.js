import React, { Component } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import {
  Grid,
  Paper,
} from "@material-ui/core";
import { useAuth0 } from '@auth0/auth0-react';
import Prompts from "../Components/Prompts";
import Firebase from "../Components/Firebase";

const Coder = () => {
  return (
    <div>
      <h1 style={{paddingBottom:"20px"}}>CS101 Supplementary Content</h1>
    <Grid container spacing={3}>
             <Grid item xs>
               <Paper>
                 <Prompts />
               </Paper>
             </Grid>
             <div>
             <Grid item xs>
              <AceEditor
                 placeholder="Start coding here!"
                mode="python"
                theme="monokai"
                onChange={() => { }}
                value={`function onLoad(editor) {
      console.log("Start coding!");
    }
    `}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                name="Code Editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                  enableBasicAutocompletion: false,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            </Grid>
            <button className="Run"  onClick={() => {}}>Run</button>
             <button className="Save" onClick={() => {}}>Save</button>
            </div>
          </Grid>
          {/* <Grid container spacing={3}>
             <Grid item xs>
             </Grid>
             <Grid item xs>
    <button className="Run" style={{position:"relative", top:"-160px", left:"-25px"}} onClick={() => {}}>Run</button>
    <button className="Save" style={{position:"relative", top:"-160px", right:"-25px" }} onClick={() => {}}>Save</button>
            </Grid>
          </Grid> */}
          </div>
  )
}
// class Coder extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       res: {},
//       // id = user.id.split("|")[1]; //unique id 
//       found: false
//     };
//   }
//   componentDidMount() {
//     this.getUser().then(result => this.setState({
//       res: result,
//     }))
//   }
//   getUser = async () => {
//     let info = {};
//     const db = Firebase.firestore();
//     const data = await db.collection("users").get();
//     data.docs.map(doc => (
//       info = {
//         name: doc.data().name,
//         id: doc.data().id,
//       }
//     ))
//     // db.collection("users").add({
//     //   first: "Ada",
//     //   last: "Lovelace",
//     //   born: 1815
//   //})
//   // .then(function(docRef) {
//   //     console.log("Document written with ID: ", docRef.id);
//   // })
//   // .catch(function(error) {
//   //     console.error("Error adding document: ", error);
//   // });
//   var userRef = db.collection("users");
//   var query = userRef.where("id", "==", "12345").get()
//   .then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
       
//     });
// })
//   };

//   updateUser = async () => {
//     // if save button pressed, save code
//   } ;

//   render() {
//     console.log(`The state is ${JSON.stringify(this.state.res)}`)
//     return (
//       <Grid container spacing={3}>
//         <Grid item xs>
//           <Paper>
//             <Prompts />
//           </Paper>
//         </Grid>
//         <Grid item xs>
//           <AceEditor
//             placeholder="Start coding here!"
//             mode="python"
//             theme="monokai"
//             onChange={() => { }}
//             value={`function onLoad(editor) {
//   console.log("Start coding!");
// }
// `}
//             fontSize={14}
//             showPrintMargin={true}
//             showGutter={true}
//             highlightActiveLine={true}
//             name="Code Editor"
//             editorProps={{ $blockScrolling: true }}
//             setOptions={{
//               enableBasicAutocompletion: false,
//               enableLiveAutocompletion: false,
//               enableSnippets: false,
//               showLineNumbers: true,
//               tabSize: 2,
//             }}
//           />
//         </Grid>
//       </Grid>
//     )
//   }
// }
export default Coder;