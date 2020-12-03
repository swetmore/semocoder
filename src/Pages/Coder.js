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
          </div>
  )
}
export default Coder;