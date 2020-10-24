import React, { Component } from "react";
import AceEditor from "react-ace";
//import 'ace-builds/webpack-resolver'
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
//import { Container, Button, Progress, Grid } from "semantic-ui-react";
import { LoremIpsum } from "react-lorem-ipsum";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
  } from "@material-ui/core";

class Coder extends React.Component
{
    render () {
        return (
            <Grid container spacing={3}>
        <Grid item xs>
          <Paper>
            {" "}
            <LoremIpsum p={6} />
          </Paper>
          </Grid>
        <Grid item xs>
          <AceEditor
            placeholder="Start coding here!"
            mode="javascript"
            theme="monokai"
            onChange={() => {}}
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