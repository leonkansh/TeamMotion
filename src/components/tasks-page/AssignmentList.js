import React from "react";
import AssignmentCard from "./AssignmentCard";
import { Box } from '@mui/system';
import { AssignmentContext } from "../../pages/AssignmentContext";

// TODO: add space between components (here or Tasks.js)

export default function AssignmentList() {
    // currentAssignment, setAssignment
    return (
        <AssignmentContext.Consumer>
            {value => (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        overflow: 'auto'
                    }}
                >
                    {
                        value.data.map(assignment => {
                            return (<AssignmentCard assignment={assignment} setAssignmentId={value.setAssignmentId} />)
                        })
                    }
                </Box>
            )}
        </AssignmentContext.Consumer>
    );
}