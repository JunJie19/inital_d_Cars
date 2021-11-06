import React, { Fragment, useEffect, useRef, useState } from 'react'
import '../Styles/home.css'
import { imgs } from '../img/ImgData'
import { Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import reactHelmet from 'react-helmet'

function Home() {
    useEffect(() => {
        const timer = setTimeout(() => {
            setcurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
        }, 3000);
        return () => clearTimeout(timer)
    })

    const [currentImg, setcurrentImg] = useState(0)
    const [modalShow, setModalShow] = useState(false);

    const length = imgs.length

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [content, setcontent] = useState("")
    const [subject, setsubject] = useState("")

    const handleOpen = () => {
        setModalShow(!modalShow)
    }

    const handleClose = () => {
        setModalShow(false)
    }

    const nextSlides = () => {
        setcurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
    }

    const prevSlides = () => {
        setcurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
    }

    const submitHandle = () => {
        axios.post(' https://initialdcars.herokuapp.com/contact', { name: name, email: email, message: content, subject: subject }).then((response) => {
            if (response) {
                alert('sent!')
            }
        })
    }

    return (
        <Fragment>
            <reactHelmet>
                <title>Initial D</title>
            </reactHelmet>
            <div className='HomeScreen'>
                <div className="imgScreen">
                    <div className="left" onClick={prevSlides}><ChevronLeftIcon /></div>
                    <section className='carImg'
                        style={{ backgroundImage: `url(${imgs[currentImg].img})`, objectFit: "contain", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></section>
                    <div className="right" onClick={nextSlides}><ChevronRightIcon /></div>
                </div>


                <div className='articleContent'>
                    <div className="contentLeft">
                        <h4>Project D Stage Journey</h4>

                        <hr />
                        <article style={{ textAlign: 'justify' }}>
                            Tochigi
                            The newly formed Project D head to the Momiji Line to battle with Seven Star Leaves. Takumi and Keisuke show their skill by beating their opponents on the Uphill and Downhill. Iketani and Mako meet again and Mako tells Iketani that she wants to become a professional driver, and Iketani decides to not tell her that he still loves her, so that she can still follow her dream with no distractions. A week or so later Project D head to the Enna Skyline, to battle with the famous Todo School. Despite seeming outmatched by the talented students of the school, Project D manage to pull through and beat them. The Todo School bring in professional driver and ex-student, Tomoyuki Tachi to battle with Project D, and Ryosuke chooses Takumi to go up against him. ...
                            <br />
                            <Button variant="dark" style={{ marginTop: '10px' }} onClick={handleOpen}>Read More ...</Button>

                            <Modal show={modalShow} onHide={handleClose} size='lg'>
                                <Modal.Header closeButton>
                                    <Modal.Title>Project D Storyline</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <section style={{ textAlign: 'justify', fontFamily: 'Arial' }}>
                                        <h6 style={{ fontWeight: '600', textTransform: 'uppercase', borderBottom: '2px solid black', width: 'fit-content' }}>Tochigi</h6>
                                        The newly formed Project D head to the Momiji Line to battle with Seven Star Leaves. Takumi and Keisuke show their skill by beating their opponents on the Uphill and Downhill. Iketani and Mako meet again and Mako tells Iketani that she wants to become a professional driver, and Iketani decides to not tell her that he still loves her, so that she can still follow her dream with no distractions. A week or so later Project D head to the Enna Skyline, to battle with the famous Todo School. Despite seeming outmatched by the talented students of the school, Project D manage to pull through and beat them. The Todo School bring in professional driver and ex-student, Tomoyuki Tachi to battle with Project D, and Ryosuke chooses Takumi to go up against him. Despite his disadvantage, Takumi manages to win by introducing his new technique, the Blind Attack, where he turns off his headlights to surprise his opponent. Takumi is later defeated by a Subaru Impreza during a delivery run, making his victory against the pro feel less important. Itsuki reveals his newly upgraded car, and Takumi and the SpeedStars head to Akina to test drive it. While on Akina, they initiate a battle against a duo of drivers with an S15, with Takumi beating them with Itsuki's Eight-Five.</section>

                                    <section style={{ textAlign: 'justify', fontFamily: 'Arial', marginTop: '1rem' }}>
                                        <h6 style={{ fontWeight: '600', textTransform: 'uppercase', borderBottom: '2px solid black', width: 'fit-content' }}>Saitama and Ibaraki</h6>
                                        Project D head to Saitama to battle with a Sadamine based car club. Keisuke goes up against a fellow FD driver, whilst Takumi goes up against the teams leader. Despite being a mediocre driver, the teams leader, Nobuhiko Akiyama, is able to construct a plan to defeat Project D on the downhill. Project D is challenged to a rematch on Maze Pass, with Takumi being put up against the rally driver Sakamoto. Keisuke battles against Wataru Akiyama, the two of them finally able to have an official battle. Project D are challenged by a duo of Mitsubishi Lancer Evolution drivers from Tsuchisaka. The two drivers play dirty, spilling oil on the road to force Keisuke to crash his FD and threatening the team with violence if they win. Despite this, Project D win their races. Project D then head to the Mt. Tsukuba Fruits Line to battle with the veteran racers of Purple Shadow. Takumi participates in a grueling eight lap battle with Dr. Toshiya Joshima. During this battle Takumi damages the Eight-Six's suspension, however manages to cross the line first due to Joshima vomiting. Keisuke battles with Kozo Hoshino in a half uphill half downhill battle.
                                        <br />
                                        While Takumi's Eight-Six is being repaired, Takumi and Itsuki head to Sadamine and run into a pair of Project D impostors. Takumi initially thinks nothing of it but changes his mind when he is slapped by Mika Uehara, whose friend Tomoko had been rudely dumped by Takumi's impersonator. The members of Project D confront the impostors, and get them to apologise to those that they have hurt. Takumi and Mika meet up again, and start seeing each other regularly.
                                    </section>

                                    <section style={{ textAlign: 'justify', fontFamily: 'Arial', marginTop: '1rem' }}>
                                        <h6 style={{ fontWeight: '600', textTransform: 'uppercase', borderBottom: '2px solid black', width: 'fit-content' }}>The Kanagawa Expedition</h6>
                                        Project D head to Kanagawa, the final prefecture of their journey. Project D battle Team 246 on Yabitsu, with Keisuke going up against another Lancer Evolution driver, Kobayakawa, and Takumi going up against their leader, Satoshi Omiya. They then head to Nagao to battle with two members of the professional racing Katagiri. Takumi finally has a rematch with Kai Kogashiwa, now a professional racer, and Keisuke goes up against his first pro Hideo Minagawa. Project D head to Nanamagari to battle with Team Spiral. Keisuke is up against their leader Ryuji Ikeda and Takumi is put against Hiroya Okuyama. Ryosuke enters into a battle of his own against Rin Hojo, Kanagawa's Grim Reaper, on the Hakone Turnpike. Rin and Ryosuke had once both been interested in the same woman, Kaori, however she had committed suicide due to backlash from her family when she rejected Hojo. Along with Ryuji Ikeda, Ryosuke is able to stop Hojo from crashing into a toll booth and ending his life. The two settle their differences and agree to never forget Kaori. Project D's battles finally arrived, with them going up against Sidewinder on the Tsubaki Line. Keisuke goes against Go Hojo, and their battle lasts for two laps before Hojo spins out. Takumi races against fellow Eight-Six driver, Shinji Inui. Their race lasts one lap, but the two fight tooth and nail for the lead, with the battle ending with Takumi blowing his engine out in order to gain the lead. Project D wraps up and Takumi decides to leave the Eight-Six. Both aces have received several offers from professional racing teams. The story ends as it had began, with Takumi on a tofu delivery, this time in the Impreza.
                                    </section>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </article>
                    </div>
                    <div className="contentRight">
                    </div>
                </div>

                <div className='Contact'>Contact</div>

                <div className="Contactus">
                    A Simple demonstration Informative Website, Feel free to dm for more project.
                    <hr />
                    <Form>
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

            </div>

        </Fragment>
    )
}

export default Home
