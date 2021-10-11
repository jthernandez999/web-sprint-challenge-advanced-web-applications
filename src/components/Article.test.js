import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react'

import { articleService as mockArticleServices } from '../services/articleServices'

jest.mock('../services/articleServices')

const testArticle = {
    id:"0",
    headline: "Test Headline",
    author: "Thom Herz",
    summary: "Test",
    body: "This is a test"
}

const testArticleWithoutAuthor = {
    id:"0",
    headline: "Test Headline",
    author: "",
    summary: "Test",
    body: "This is a test"
}


test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
    
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />)
        const headline = screen.getByTestId('headline')
            expect(headline).toBeInTheDocument()
            expect(headline).toHaveTextContent(/test headline/i)
        const author = screen.getByTestId('author')
            expect(author).toBeInTheDocument()
            expect(author).toHaveTextContent(/thom herz/i)
    
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticleWithoutAuthor} /> )
        const author = screen.getByTestId('author')
        expect(author).toHaveTextContent(/associated press/i)
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const mockHandleDelete = jest.fn()
    render(<Article article={testArticle}  handleDelete={mockHandleDelete} />)
        const deleteButton = screen.getByTestId('deleteButton')
            userEvent.click(deleteButton)
            expect(mockHandleDelete).toHaveBeenCalled()
    // screen.debug()
});

//Task List:
//1. Complete all above tests. Create test article data when needed.