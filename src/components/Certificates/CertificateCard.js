import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

export default function CertificateCard({ title, description, link, year }) {
  return (
    <Card data-type="Card" boxShadow="2xl" maxW={"500px"}>
      <Image
        maxH={"345px"}
        borderStyle={"solid"}
        borderWidth={"6px"}
        borderColor={"black"}
        data-type="Image"
        objectFit="cover"
        src={link}
        alt="Starbucks"
      ></Image>
      <CardHeader data-type="CardHeader">
        <Flex
          data-type="Flex"
          flex="1"
          gap="4"
          alignItems="center"
          flexWrap="wrap"
          height={"45px"}
        >
          <Box data-type="Box">
            <Text
              className="raleway"
              data-type="Heading"
              size="sm"
              fontWeight={"bold"}
            >
              {title}
            </Text>
            <Text data-type="Text" className="space">
              {year}
            </Text>
          </Box>
        </Flex>
      </CardHeader>

      <CardBody data-type="CardBody">
        <Text data-type="Text" fontWeight="thin" className="merriweather">
          {description}
        </Text>
      </CardBody>
    </Card>
  );
}
