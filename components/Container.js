import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import React from "react";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const navHoverBg = {
    light: "gray.400",
    dark: "gray.500",
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              cursor="pointer"
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              cursor="pointer"
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Blog
            </Button>
          </NextLink>
        </Box>
        <DarkModeSwitch />
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Container;
