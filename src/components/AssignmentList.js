import React from "react";
import AssignmentCard from "./AssignmentCard";
import { Box } from '@mui/system';

// TODO: add space between components (here or Tasks.js)

export default function AssignmentList() {
    // currentAssignment, setAssignment
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                overflow: 'auto'
            }}
        >
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
        </Box>
    );
}
