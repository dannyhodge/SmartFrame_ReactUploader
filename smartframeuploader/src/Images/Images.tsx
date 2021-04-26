import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";

export default function Images() {

  var data = useQuery("images", () =>
    fetch("http://localhost:3002/images").then((res) => {
      console.log("res");

      return res.json();
    })
  );
  if (data.isLoading) return <Box mt="150px">Loading...</Box>;

  return (
    <SimpleGrid minChildWidth="200px" spacing="40px" mt="50px">
      {data.data.map((element: any, i: number) => {
        return <Image height="200px" width="200px" key={i} src={`${element.signedUrl[0]}`}></Image>;
      })}
    </SimpleGrid>
  );
}
