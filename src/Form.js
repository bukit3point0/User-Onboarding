import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
font-family: 'DotGothic16', sans-serif;
    border: 1px solid black;
    width: 50%;
    margin: auto;
    font-size:2rem;
    outline: 1px solid black;
`

const FillBox = styled.div`
    padding: 1rem;
`

const Line = styled.div`
    padding: 0 1rem;
`

const FormName = styled.label`
    margin: 1rem 0;
`

const Input = styled.input`
    margin-top: 1rem;
    margin-left: 1rem;
    width: 50%;
`

const Check = styled.input`
    margin: 1rem;
`

const GoDownTheRabbitHole = styled.button`
    display: block;
    margin: 0 auto 2rem;
    background-color: red;
    font-weight: bold;
`

const Form = () => {

    return (
        <FormContainer>
            <FillBox>
                <Line>
                    <FormName>Name:</FormName>
                    <Input name="name" type="name"/>
                </Line>
                <Line>
                    <FormName>Email Address:</FormName>
                    <Input name="email" type="email"/>
                </Line>
                <Line>
                    <FormName>Password:</FormName>
                    <Input name="password" type="password"/>
                </Line>
                <Line>
                    <Check name="TOS" type="checkbox"/>
                    <FormName>I'm ready to go down the rabbit hole. I'm taking the red pill.</FormName>
                </Line>
            </FillBox>
            <GoDownTheRabbitHole>I'm ready, Morpheus.</GoDownTheRabbitHole>
        </FormContainer>
    )
}

export default Form