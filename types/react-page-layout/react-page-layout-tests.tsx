import React, { Component } from 'react';
import { render } from 'react-dom';
import { Slot, LayoutProvider, Page, Section } from 'react-page-layout';

class LoginPage extends Component {
    render() {
        return (
            <Page layout="public">
                <Section slot="main">
                    <h1> THIS IS THE PAGE CONTENT </h1>
                </Section>
            </div>
        );
    }
}

class PublicLayout extends Component {
    render() {
        return (
            <div>
                <header>Page Header</header>
                <Slot name="main" />
                <footer>Page Footer</footer>
            </div>
        );
    }
}

const layouts = {
    'public': PublicLayout,
};

class App extends Component {

    function render() {

        // Render your page inside
        // the layout provider
        return (
            <LayoutProvider layouts={layouts}>
                <LoginPage />
            </LayoutProvider>
        );
    }
}

render(App, document.getElementById('root'));
