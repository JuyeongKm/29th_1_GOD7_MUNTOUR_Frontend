import React from "react";
import styled from "styled-components";

const StyleButton = styled.div`
    font-size: 1em;
    font-weight: 700;
    color: white;
    border-radius: 50px;
    border: 0px;
    cursor: pointer;
    background-color: #85A1E8;
    padding: 15px;
    margin: 15px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

`;

function Button(props){
    const { title, onClick, disabled, className, width, height, borderRadius, fontSize } = props;

    return(
        <StyleButton
            style={{width, height, borderRadius, fontSize}}
            className={className}
            onClick={onClick}
            disabled={disabled}>
            {title}
        </StyleButton>
    );
}

export default Button;