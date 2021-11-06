import React, { Fragment, useState } from 'react'
import '../Styles/home.css'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import reactHelmet from 'react-helmet'

function Contact() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [content, setcontent] = useState("")
    const [subject, setsubject] = useState("")

    const submitHandle = () => {
        axios.post('https://initialdcars.herokuapp.com/contact', { name: name, email: email, subject: subject,message: content }).then((response) => {
            if (response) {
                alert('sent!')
            }
        })
    }

    return (
        <Fragment>
                    <reactHelmet>
                <title>Initial D | Contact</title>
                </reactHelmet>
            <div className="Contactus" style={{ height: '75vh', marginBottom: '10px' }}>
                Contact for more info now - I'd love to hear from you. Need help or support? Drop me a message and I'm ready to help.
                <hr />
                <Form >
                    <Form.Group controlId="form.Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setname(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="form.Email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setemail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="form.Email">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Website Maintenance etc." onChange={(e) => setsubject(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="form.Textarea">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Comments and Discussion are always welcome!" onChange={(e) => setcontent(e.target.value)} />
                    </Form.Group>
                    <br />
                    <Button variant="success" onClick={submitHandle}>Submit</Button>
                </Form>
            </div>
        </Fragment>
    )
}

export default Contact
