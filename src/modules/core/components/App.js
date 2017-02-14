import React from 'react';
import Container from './Container';
import { Weather } from '../../weather';
import Header from './Header';

// Main component of React app
const App = () => (
    <Container>
        <Header text="Weather Forecast"/>
        <Weather />
    </Container>
);

export default App;