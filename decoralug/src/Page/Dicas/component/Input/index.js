import React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

function Input() {
    return (
        <div>
            <InputGroup className="mb-3 container">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}


export default Input