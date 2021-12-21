import { Box, Button, Input, Text } from "@airtable/blocks/ui";
import React, { useRef, useState } from "react";

const License = () => {
  const [verified, setVerified] = useState(false);
  const licenseRef = useRef();
  const verifySubmission = async () => {
    const res = await fetch(
      `https://api.gumroad.com/v2/licenses/verify?product_permalink=plans&license_key=${licenseRef.current.value}`,
      {
        method: "POST",
      }
    );
    const data = await res.json();
    if (data.success) {
      setVerified(true);
      localStorage.setItem("license", licenseRef.current.value);
      window.location.reload();
    } else {
      alert("Invalid license");
      localStorage.removeItem("license");
    }
  };

  return (
    <Box
      top={0}
      position="absolute"
      width="100vw"
      height="100vh"
      backgroundColor="rgba(110, 129, 135, 0.2)"
      display={verified ? "none" : "flex"}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width={400}
        backgroundColor="rgba(255,255, 255, 0.9)"
        borderRadius={3}
        padding={4}
        display="flex"
        flexDirection="column"
      >
        <Text marginBottom={3} textAlign="center" fontWeight={700} size="large">
          {" "}
          Enter license
        </Text>
        <Input marginBottom={2} ref={licenseRef} />
        <Button onClick={verifySubmission} variant="primary" alignSelf="center">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default License;
