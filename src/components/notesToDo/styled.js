import styled from "styled-components";

export const Notepad = styled.div`

    background-color: #fff;
    box-shadow: 0 0 14px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    padding: 20px 20px 10px 20px;

    strong{
        display: block;
        font-size:16px;
        color: #333;
    }
            textarea{
                padding: 7px;
                margin-top: 7px;
                margin-bottom: 5px;
                width: 100%;
                height: 130px;
                font-size: 14px;
                color: #666;
                border: none;
                background-color: #fff;
                resize: none;
            }
            .close{
                position: relative;
                left: 100%;
                bottom: 10%;

                cursor: pointer;

                font-weight: bold;

                :hover{
                    color: #eb8f7a;
                    transition: 0.2s;
                }
            }
            span{
                color: #c4c4c4;
                cursor: pointer;

                font-weight: bold;

                :hover{
                    color: #eb8f7a;
                    transition: 0.2s;
                }
            }
`