import { Container, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import Images from "../Images/Images";

export default function Content() {
  const [img, setImg] = useState(null);

  const postImage = () => {
    var bodyFormData = new FormData();

    console.log("img");
    console.log(img);

    bodyFormData.append("files", img);

    for (var pair of bodyFormData.entries()) {
      console.log("key: " + pair[0] + ", " + "val: ", pair[1]);
    }


    const headers = {
      'content-type': 'multipart/form-data'
  }

    axios
      .post("http://localhost:3002/newimage",
              bodyFormData, {headers}
      )
      .then((response) => console.log(response));
  };

  return (
    <Container maxW="8xl" centerContent>
      <Box padding="4" width="80%">
        <Box style={{ width: "100%", alignItems: "center" }} mt="10">
          <input
            type="file"
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />

          <Button bg="#677DB7" color="white" onClick={postImage}>
            Upload
          </Button>
        </Box>

        <Images />
      </Box>
    </Container>
  );
}
