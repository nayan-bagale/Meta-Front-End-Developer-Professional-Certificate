import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      align="flex-start"
      backgroundColor="white"
      borderRadius="lg"
      overflow="hidden"
      maxW="lg"
    >
      <Image src={imageSrc} alt={title} borderRadius="lg" alignSelf='end' />
      <Box px={5} py={4}>
        <Heading as="h4" size="md" color="black" mb={4}>
          {title}
        </Heading>
        <Text color="slategray">{description}</Text>
        <Text color="black" mt={4} cursor='pointer' >
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Box>
    </VStack>
  );
};

export default Card;
