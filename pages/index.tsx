import type { NextPage } from 'next'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';

const Home: NextPage = () => {
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
          <Navbar.Link href="#">Careers</Navbar.Link>
          <Navbar.Link href="#">About Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat color='error' href="#">
              Sign Up
            </Button> 
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    
      <Grid.Container justify="center" css={{"height": "500px", "backgroundColor": "black"}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Revolutionizing</Text>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Real Estate</Text>
            <Button size="lg" shadow color="error" css={{"width": "100%", "marginTop": "10px"}}>SIGN IN</Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            title='Dhaanvi Farms'
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            price="35"
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

