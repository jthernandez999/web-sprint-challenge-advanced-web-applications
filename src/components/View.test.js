import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

import articleService, { articleService as mockArticleService } from '../services/articleServices';

// jest.mock('../services/articleServices')
// mockArticleService()


const noArticles = [];

const testArticles = [
    {
    id: 'aMqwd0', //unique article id
    headline: "headline0", //title of article
    createdOn: '2021-08-09T18:02:38-04:00', 
    summary: "summary0", //short summary statement of article
      body: "0"  //paragraph of article text
}, 
{
    id: 'aMqwd1', //unique article id
    headline: "headline1", //title of article
    createdOn: '2021-08-09T18:02:38-04:01 ', //timestamp of when article was added
    summary: "summary1", //short summary statement of article
      body: "1"  //paragraph of article text
}, 
{
    id: 'aMqwd2', //unique article id
    headline: "headline2", //title of article
    createdOn: '2021-08-09T18:02:38-04:02 ', //timestamp of when article was added
    summary: "summary2", //short summary statement of article
      body: "2"  //paragraph of article text
}
]


test("renders zero articles without errors", async () => {
    // jest.mock('../services/articleServices')
    // mockArticleService()
    render(<View articles={noArticles}/>)    
        
    screen.debug()
});

test("renders three articles without errors", async ()=> {
    
    // screen.debug()
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.