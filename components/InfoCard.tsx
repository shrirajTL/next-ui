import type {NextPage} from 'next';
import { Card, Text, Row, Col} from "@nextui-org/react";

interface Props {
    title: string;
    imageURL: string;
    price: string;
}

const InfoCard: NextPage<Props> = (props) => {

    const { title, imageURL, price } = props;

    return (
        <Card>
            <Card.Header css={{position: "absolute", top: 5}}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        {title} 
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image src={imageURL}></Card.Image>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    bottom: 0
                }}
            >
                <Row>
                    <Col>
                        <Text color="#d1d1d1" size={18}>
                            {price} people intersted !
                        </Text>
                    </Col>
                </Row>

            </Card.Footer>
        </Card>
    )
}

export default InfoCard;