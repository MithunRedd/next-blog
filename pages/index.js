import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  chakra,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Head from "next/head";
import NextLink from "next/link";
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import Quote from "../components/Quote";
import Skills from "../components/Skills";

export default function Index() {
  const MotionBox = motion(chakra.div);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.300",
  };

  const color = {
    light: "gray.600",
    dark: "gray.300",
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <Container>
      <Head>
        <title>Home - Mithun Reddy</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <MotionBox
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: -10 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <Heading mb={2}>
              Hi, I'm Mithun Reddy, a developer, a designer and a graduate{" "}
            </Heading>
          </MotionBox>

          <Text color={colorSecondary[colorMode]}>
            I was born and raised in Hyderabad. I'm pursuing my B.tech degree in
            computer science from ICFAI Foundation For Higher Education (ICFAI
            University, Hyderabad). I have interned with a few mid-size
            companies and was able to work closely with their mobile and web
            developers. I also have experience with online code repositories,
            and I love to contribute as much as I can.
          </Text>

          <Text
            alignItems="center"
            justifyContent="center"
            mt={5}
            color={colorSecondary[colorMode]}
          >
            Feel free to see my{" "}
            <Link
              href="https://gitconnected.com/mithunredd/resume"
              isExternal
              color={colorSecondary[colorMode]}
            >
              <Button>resume</Button>
            </Link>
          </Text>

          <Divider
            colorScheme="blackalpha"
            mb={8}
            mt={12}
            w="90%"
            alignSelf="center"
          />

          <Heading
            letterSpacing="tight"
            mt={8}
            mb={4}
            size="lg"
            fontWeight={700}
            as="h2"
          >
            Tech Stack
          </Heading>

          <Skills />

          <Divider
            colorScheme="blackalpha"
            mb={8}
            mt={12}
            w="90%"
            alignSelf="center"
          />

          <Heading
            letterSpacing="tight"
            mt={8}
            mb={4}
            size="lg"
            fontWeight={700}
            as="h2"
          >
            Latest Blog
          </Heading>

          <BlogPost
            title="Roadmap to learning data structures and algorithms (DSA)"
            summary="The best way to learn data structures and algorithms."
            slug="dsa"
            publishedAt="2021-05-01"
          />

          <Flex justify="center" width="100%">
            <NextLink href="/blog" passHref>
              <Link _hover="none">
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="gray"
                  variant="outline"
                  aria-label="view all posts"
                >
                  View All Posts
                </Button>
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Stack>
      <Quote />
    </Container>
  );
}
