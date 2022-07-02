import styled from "styled-components";


export const WrapperHeader = styled.div`
    display : flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 16px;

    
    input {
        width: 100%;
        border: 1px solid #ccc;
        border-radius:8px;
        height: 44px;
        padding: 8px;
        font-weight: 500;

    }

    button{
        background-color: #225ed8;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        

       
        &:hover{
            background-color: #2c5282;
            box-shadow: 3px 2px 10px rgba(0 , 0 , 0 , 0.2);
            transition: 0.5s;
        }

        span{
            font-weight: bold;
            color: #fff;
            font-size: 16px;
        }

    }

    
`;