import React from 'react';
import PropTypes from "prop-types";
import {DRAGGABLE_ITEM_TYPES} from "../enums";
import { useDrop } from 'react-dnd'

const DropableAnswerWrapper = (props) => {
    const useDropResult = useDrop({
        accept: DRAGGABLE_ITEM_TYPES.QUESTION,
        drop: () => {
            props.onDrop();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    });
    const [{isOver}, drop] = useDropResult;

    const dropStyle = {
        transform: isOver ? 'scale(1.25)' : null,
    };

    return (
        <div
            className={props.className}
            style={dropStyle}
            ref={drop}
            onClick={props.onClick}
        >{props.children}</div>
    );
};

DropableAnswerWrapper.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    onDrop: PropTypes.func,
};

export default DropableAnswerWrapper;
