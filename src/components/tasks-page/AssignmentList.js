import React from "react";
import AssignmentCard from "./AssignmentCard";
import { Box } from '@mui/system';
import { AssignmentContext } from "../../pages/AssignmentContext";

export default function AssignmentList() {
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
                        value.data.map((assignment) => {
                            return (
                                <AssignmentCard
                                    key={assignment._id}
                                    assignment={assignment}
                                    assignment_id={value.assignment_id}
                                    setAssignmentId={value.setAssignmentId}
                                    setTodoList={value.setTodoList}
                                    data={value.data}
                                />
                            )
                        })
                    }
                </Box>
            )}
        </AssignmentContext.Consumer>
    );
}
