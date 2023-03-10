import styled from "styled-components";

export const MainDiv = styled.main`

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 60px 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .asideDiv{
        width: 25vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .asideCard{
        width: 250px;
        left: 18vw;

        margin-bottom: 3vh;
        padding: 30px 20px;
        background-color: #fff;
        border-radius: 10px;

        strong{
            font-size: 20px;
            text-align: center;
            display: block;
            color:#333;
        }

        form{
            margin-top: 30px;
        }

        .inputBlock{

            margin-top: 20px;
            label{
                color: #acacac;
                font-size: 14px;
                font-weight: bold;
            }

            .title{

                border: none;
                border-bottom: 1px solid #D9D9D9;
                width: 100%;
            }

            .anotatiton{

                border: none;
                border-bottom: 1px solid #D9D9D9;
                height: 200px;
                width: 100%;
                display: flex;
                flex-direction: column;
            }
        }
        button{
            width: 100%;
            margin-top: 30px;
            background-color: #ffd3ca;

            border: none;
            border-radius: 10px;

            padding: 15px 20px;
            
            font-size: 16px;
            font-weight: bold;
            color: #fff;

        }
    }
    .dashboard{

        width: 50vw;
        height: 75vh;
        
        ul{
            display: grid;
            grid-template-columns: repeat(auto-fill, 250px);
            column-gap: 25px;
            row-gap: 8px;
            grid-auto-rows: 10px;
            position: absolute;
            justify-content: center;
            width: 950px;
            height: auto;
        }
    }
`