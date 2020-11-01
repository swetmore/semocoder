import React, { Component } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";

import {
  Grid,
  Paper,
} from "@material-ui/core";

import Prompts from "../Components/Prompts";

class Coder extends React.Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper>
           <Prompts/>
          </Paper>
        </Grid>
        <Grid item xs>
          <AceEditor
            placeholder="Start coding here!"
            mode="javascript"
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
      </Grid>
    )
  }
}
export default Coder;