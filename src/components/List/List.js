import React, { Component } from 'react'
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Panel from 'muicss/lib/react/panel';

export default class List extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Panel>
                    <p>This is where the list is going to be</p>
                    </Panel>
                    <Panel>
                    <p>This is where the list is going to be right</p>
                    </Panel>
                    <Panel>
                    <p>This is where the list is going to be for sure</p>
                    </Panel>
                
                </Container>
               
            </div>
        )
    }
}
