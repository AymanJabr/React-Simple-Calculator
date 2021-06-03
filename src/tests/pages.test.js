import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Quote from '../pages/Quote';
import Calculator from '../pages/Calculator';

it('Correctly renders the Home page', () => {
  const tree = renderer.create(
    <BrowserRouter>
      {' '}
      <Home />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Correctly renders the Quote page', () => {
  const tree = renderer.create(
    <BrowserRouter>
      {' '}
      <Quote />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Correctly renders the Calculator page', () => {
  const tree = renderer.create(
    <BrowserRouter>
      {' '}
      <Calculator />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
