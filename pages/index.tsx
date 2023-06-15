import type { NextPage } from 'next'
import { Container, Navbar, Text, Button, Grid, Col, Modal, Input, Row, Checkbox, } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';
import { useRouter } from 'next/router';
//import ModalComp from '../components/Modal';
import { useState } from 'react';


const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('https://qa.talkinglands.com');
  }

  const signupClick = () => {
    router.push('/signup')
  }

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <Container>
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Talking Lands
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="/careers">Careers</Navbar.Link>
          <Navbar.Link href="/about">About Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Item>
            <div>
              <Button auto flat color='error' onPress={signupClick}>
                Sign Up
              </Button>
              <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
                <Modal.Body>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email"
                  />
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Password"
                  />
                  <Row justify="space-between">
                    <Checkbox>
                      <Text size={14}>Remember me</Text>
                    </Checkbox>
                    <Text size={14}>Forgot password?</Text>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button auto flat color="error" onPress={closeHandler}>
                    Close
                  </Button>
                  <Button auto onPress={closeHandler}>
                    Sign in
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Grid.Container justify="center" css={{ "height": "500px", "backgroundColor": "black" }}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ "width": "100%" }}>
            <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>Revolutionizing</Text>
            <Text weight={"bold"} size={70} css={{ "textAlign": "center" }}>Real Estate</Text>
            <Button onClick={handleClick} size="lg" shadow color="error" css={{ "width": "100%", "marginTop": "10px" }}>
              Explore Properties
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            title='Dhaanvi Farms'
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            price="0   5"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            title='Abhivruddhi'
            imageURL="https://littlevisuals.co/images/sunset.jpg"
            price="70"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            title='Eco Habitat'
            imageURL="https://littlevisuals.co/images/tail.jpg"
            price="50"
          />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Home

