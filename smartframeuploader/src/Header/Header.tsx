import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Flex color="white">
      <Box w="100%" h="50px" bg="#322A26">
        <Heading>Smart Frame Manager</Heading>
      </Box>
    </Flex>
  );
}
