import { Container, Spacer, Text } from '@nextui-org/react';

const About = () => {
  return (
    <Container>
      <Spacer y={3} />
      <Text h2>About Us</Text>
      <Spacer y={1} />

      <Text>
        We are a real estate and farmland management company dedicated to providing exceptional services
        to our clients. With years of experience in the industry, we have a deep understanding of the
        real estate market and agricultural practices.
      </Text>

      <Spacer y={1} />

      <Text>
        Our team consists of highly skilled professionals who are passionate about delivering
        top-quality results. We specialize in various aspects of real estate, including property
        management, investments, and development.
      </Text>

      <Spacer y={1} />

      <Text>
        In the field of farmland management, we offer comprehensive services such as crop planning,
        soil analysis, irrigation management, and farm maintenance. We work closely with farmers and
        landowners to maximize productivity and ensure sustainable practices.
      </Text>

      <Spacer y={1} />

      <Text>
        At our core, we prioritize transparency, integrity, and client satisfaction. We strive to
        build long-term partnerships and provide tailored solutions to meet the unique needs of our
        clients.
      </Text>

      <Spacer y={1} />

      <Text>
        Contact us today to learn more about our services and how we can assist you with your real
        estate and farmland management needs.
      </Text>

      <Spacer y={3} />
    </Container>
  );
};

export default About;

