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

let acePanelsDefault = [15];
let currentAcePanel = 0;

acePanelsDefault[0] = "def main:\n" +
    "  print(\"Select a panel on the left to select a challenge!\")\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[1] = "def main:\n" +
    "  print(\"This program illustrates a chaotic function\")\n" +
    "  x = eval(input(\"Enter a number between 0 and 1: \"))\n" +
    "\n" +
    "  for i in range(10)\n" +
    "    x = 3.9 * x * (1 - x)\n" +
    "    print(x)\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[2] = "def main:\n" +
    "  num1 = 50\n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  total = num1 +\n" +
    "  print(total)\n" +
    "  \n" +
    "  total = num1 -\n" +
    "  print(total)\n" +
    "  \n" +
    "  total = num1 *\n" +
    "  print(total)\n" +
    "  total = num1 /\n" +
    "  print(total)\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[3] = "def main:\n" +
    "  print(\"Hello! This program can add two numbers together\")\n" +
    "  num1 = 6\n" +
    "  num2 = 2\n" +
    "  print()\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[4] = "def main:\n" +
    "  print(\"This program calculates the area of a trapezoid\")\n" +
    "  base1 = \n" +
    "  base2 =\n" +
    "  height =\n" +
    "  \n" +
    "  area =\n" +
    "  print()\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[5] = "def main:\n" +
    "  print(\"This program calculates the cost of a car ride\")\n" +
    "  length =\n" +
    "  time =\n" +
    "  passengers =\n" +
    "  \n" +
    "  \n" +
    "  print(\"The cost for each passenger is\", cost)\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[6] = "def main:\n" +
    "  \n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[7] = "def main:\n" +
    "  words = [\"hello\", \"world\"]\n" +
    "  words.append(\"CS101\")\n" +
    "  \n" +
    "  print(words[0])\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[8] = "def main:\n" +
    "\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[9] = "def main:\n" +
    "  numbers = [7, 12, -2, 15, 4, 9, 7, 20, 6, -5]\n" +
    "  sum = int(0)\n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  print(sum / len(numbers))\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[10] = "def main:\n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "\n" +
    "\n" +
    "def calculateDistance(x1, y1, x2, y2):\n" +
    "  vertDist = int(x2 - y2)\n" +
    "  horzDist = int(y2 - y1)\n" +
    "  \n" +
    "  vertDist = math.pow(vertDist, 2)\n" +
    "  horzDist = math.pow(horzDist, 2)\n" +
    "  \n" +
    "  return math.sqrt(vertDist + horzDist)\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[11] = "def main:\n" +
    "  \n" +
    "\n" +
    "\n" +
    "def average(numbers)\n" +
    "  \n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[12] = "def main:\n" +
    "\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[13] = "def main:\n" +
    "\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[14] = "def main:\n" +
    "  fileName = \n" +
    "  file = open(fileName, \"r\")\n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "  file.close()\n" +
    "\n" +
    "\n" +
    "main()\n";
acePanelsDefault[15] = "def main:\n" +
    "\n" +
    "\n" +
    "\n" +
    "main()\n";

let acePanels = acePanelsDefault;


class Coder extends React.Component {
  
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper>
           <Prompts/>
          </Paper>
        </Grid>
        <Grid id="aceGrid" item xs>
          <AceEditor
            placeholder="Start coding here!"
            id={"aceEditor"}
            mode="python"
            theme="monokai"
            onChange={() => { }}
            value={acePanels[0]}
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


// document.getElementById("panel1bh-content").addEventListener("click", function() {updateAceEditor(1)}, false);
// document.getElementById("panel2bh-content").addEventListener("click", function() {updateAceEditor(2)}, false);
// document.getElementById("panel3bh-content").addEventListener("click", function() {updateAceEditor(3)}, false);
// document.getElementById("panel4bh-content").addEventListener("click", function() {updateAceEditor(4)}, false);
// document.getElementById("panel5bh-content").addEventListener("click", function() {updateAceEditor(5)}, false);
// document.getElementById("panel6bh-content").addEventListener("click", function() {updateAceEditor(6)}, false);
// document.getElementById("panel7bh-content").addEventListener("click", function() {updateAceEditor(7)}, false);
// document.getElementById("panel9bh-content").addEventListener("click", function() {updateAceEditor(9)}, false);
// document.getElementById("panel10bh-content").addEventListener("click", function() {updateAceEditor(10)}, false);
// document.getElementById("panel11bh-content").addEventListener("click", function() {updateAceEditor(11)}, false);
// document.getElementById("panel12bh-content").addEventListener("click", function() {updateAceEditor(12)}, false);
// document.getElementById("panel13bh-content").addEventListener("click", function() {updateAceEditor(13)}, false);
// document.getElementById("panel14bh-content").addEventListener("click", function() {updateAceEditor(14)}, false);
// document.getElementById("panel15bh-content").addEventListener("click", function() {updateAceEditor(15)}, false);


// Replaces the aceEditor contents with code associated with the selected panel
function updateAceEditor(newAcePanel) {
    // The new HTML for the ace editor. Everything is the same except the coding content
    let newEditorHTML = "<AceEditor" +
        "placeholder=\"Start coding here!\"" +
        "id={\"aceEditor\"}" +
        "mode=\"python\"" +
        "theme=\"monokai\"" +
        "onChange={() => { }}" +
        "value={acePanels[" + newAcePanel + "]}" +  // Updates the coding content
        "fontSize={14}" +
        "showPrintMargin={true}" +
        "showGutter={true}" +
        "highlightActiveLine={true}" +
        "name=\"Code Editor\"" +
        "editorProps={{ $blockScrolling: true }}" +
        "setOptions={{" +
        "    enableBasicAutocompletion: false," +
        "    enableLiveAutocompletion: false," +
        "    enableSnippets: false," +
        "    showLineNumbers: true," +
        "    tabSize: 2," +
        "}}" +
    "/>";

    // Deletes the aceEditor element from inside the grid element and adds a new one with the updated content
    document.getElementById("aceEditor").remove();
    let newGridHTML = document.getElementById("aceGrid")
    newGridHTML.innerHTML = newEditorHTML;
}

export default Coder;