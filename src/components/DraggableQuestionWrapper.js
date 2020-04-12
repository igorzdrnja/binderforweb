import React from 'react';
import PropTypes from "prop-types";
import {DRAGGABLE_ITEM_TYPES} from "../enums";
import { useDrag } from 'react-dnd'

const DraggableQuestionWrapper = (props) => {
    const useDragResult = useDrag({
        item: { type: DRAGGABLE_ITEM_TYPES.QUESTION},
        collect: monitor => {
            return {
                isDragging: !!monitor.isDragging(),
            }
        },
    });

    const [{isDragging}, drag] = useDragResult;
    const dragStyle = {
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
    };

    return (
        <div style={dragStyle} ref={drag}>{props.children}</div>
    );
};

DraggableQuestionWrapper.propTypes = {
    children: PropTypes.any,
};

export default DraggableQuestionWrapper;
