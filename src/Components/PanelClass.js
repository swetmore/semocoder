// This class is used to help simplify and modularize the Prompts.js panel information
// Easily allows panel information to be added through several setter methods

import React from "react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";

// The constructor takes React variables such as classes, expanded, and handleChange
export default class PanelClass {
    constructor(panelName, classes, expanded, handleChange) {
        this.panelName = panelName;
        this.heading = "";
        this.secondaryHeading = "";
        this.descriptionDetails = "";
        this.challengeDetails = "";

        this.classes = classes;
        this.expanded = expanded;
        this.handleChange = handleChange;
    }

    setPanelName(panelName) {
        this.panelName = panelName;
    }

    setHeading(heading) {
        this.heading = heading;
    }

    setSecondaryHeading(secondaryHeading) {
        this.secondaryHeading = secondaryHeading;
    }

    setDescriptionDetails(descriptionDetails) {
        this.descriptionDetails = descriptionDetails;
    }

    setChallengeDetails(challengeDetails) {
        this.challengeDetails = challengeDetails;
    }

    // Returns the HTML required to display all the information in a panel
    // All class variables are used in this function
    returnHTML() {
        return (
            <Accordion
                expanded={this.expanded === this.panelName}
                onChange={this.handleChange(this.panelName)}
            >
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon/>}
                    aria-controls={this.panelName + "bh-content"}
                    id={this.panelName + "bh-content"}
                >
                    <Typography className={this.classes.heading}>{this.heading}</Typography>
                    <Typography className={this.classes.secondaryHeading}>
                        {this.secondaryHeading}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <h2 className={this.classes.detailHeader}>Program Description</h2>
                            {this.descriptionDetails}
                            <h2 className={this.classes.detailHeader}>Coding Challenge</h2>
                            {this.challengeDetails}
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        );
    }
}