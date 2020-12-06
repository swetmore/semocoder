import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import {
  Grid,
  Paper,
} from "@material-ui/core";
import Prompts from "../Components/Prompts";

let acePanelsDefault = [15];

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
    <div>
      <h1 style={{paddingBottom:"20px"}}>CS101 Supplementary Content</h1>
    <Grid container spacing={3}>
             <Grid item xs>
               <Paper>
                 <Prompts />
               </Paper>
             </Grid>
             <div>
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
            <button className="Run"  onClick={() => {}}>Run</button>
             <button className="Save" onClick={() => {}}>Save</button>
            </div>
          </Grid>
          </div>
  )
  }
}

export default Coder; 
