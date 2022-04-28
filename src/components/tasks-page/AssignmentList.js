import React from "react";
import AssignmentCard from "./AssignmentCard";
import { Box } from '@mui/system';
import { AssignmentContext } from "../../pages/AssignmentContext";

// TODO: add space between components (here or Tasks.js)
// Collin: try using flex property gap

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
                        value.data.map((assignment, index) => {
                            return (
                                <AssignmentCard
                                    key={assignment._id}
                                    assignment={assignment}
                                    setAssignmentId={value.setAssignmentId}
                                    setTodoList={value.setTodoList}
                                    data={value.data}
                                    index={index}
                                />
                            )
                        })
                    }
                </Box>
            )}
        </AssignmentContext.Consumer>
    );
}
