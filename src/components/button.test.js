import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import '@testing-library/jest-dom';

test('Button is rendered with label',()=>{
    const {getByText}=render(<Button label="Click ME"/>);
    const buttonElement=getByText('Click ME');
    expect(buttonElement).toBeInTheDocument();
})

test('Button is rendered with label',()=>{
    const {container}=render(<Button label="Click ME"/>);
    const buttonElement=container.querySelector('button');

    expect(buttonElement).toHaveClass('btn')
})

test('Button is Clicked',() =>{
    const onClickMock=jest.fn();
    const {container}=render(<Button label="Click ME" onClick={onClickMock}/>);
    const buttonElement=container.getByText('Click ME');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenClickedTimes(1)
})

// const mockFun=jest.fn();
// test('Button is rendered with label',()=>{
//     mockFun();
//     mockFun();

//     expect(mockFun).toHaveBeenCalledTimes(2);
// })