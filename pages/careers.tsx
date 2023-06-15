import { Container, Spacer, Text, Card } from '@nextui-org/react';

const Careers = () => {
  return (
    <Container>
      <Spacer y={3} />
      <Text h2>Careers</Text>
      <Spacer y={1} />

      <Text>
        Join our team of dedicated professionals who are passionate about real estate and farmland management.
        We offer exciting career opportunities and a supportive work environment where you can thrive and
        make a difference.
      </Text>

      <Spacer y={2} />

      <Text h3>Current Openings</Text>

      <Spacer y={1} />

      <Card css={{px: '$10', py: '$4'}}>
        <Text h4>Real Estate Agent</Text>
        <Text>
          We are seeking an experienced real estate agent to join our team. The ideal candidate should have
          a strong knowledge of the local real estate market, excellent communication skills, and a
          proven track record of sales success. Apply now to become part of our dynamic team and help
          clients find their dream properties.
        </Text>
      </Card>

      <Spacer y={1} />

      <Card css={{px: '$10', py: '$4'}}>
        <Text h4>Senior Full StackDeveloper</Text>
        <Text>
        We are seeking a highly skilled and experienced Senior Full Stack Developer to join our dynamic development team. As a Senior Full Stack Developer, you will be responsible for designing, developing, and maintaining robust and scalable web applications and systems. You will work closely with cross-functional teams to gather requirements, implement features, and ensure high-quality code delivery.
        </Text>
      </Card>

      <Spacer y={3} />
    </Container>
  );
};

export default Careers;
