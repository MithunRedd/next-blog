import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Button,
  chakra
} from '@chakra-ui/react'
import { motion, useViewportScroll, useTransform } from "framer-motion"

import Container from '../components/Container'

export default function Index() {
  const MotionBox = motion(chakra.div)
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}
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
            whileHover={{scale: 1.3,transition: { duration: 0.5 },}}
            whileTap={{ scale: 0.9 }}
            animate={{ y: -10 }}
            transition={{ ease: "easeOut", duration: 0.5 }} 
          >
            <Heading mb={2}>Hi, I'm Mithun Reddy, a developer, a designer and a graduate </Heading>
          </MotionBox>

          <MotionBox
            whileHover={{ scale: 1.1,transition: { duration: 0.5 }, }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: 10 }}
            transition={{ ease: "easeOut", duration:0.5 }}          
          >
          <Text color={colorSecondary[colorMode]}>I was born and raised in Hyderabad. I'm pursuing my B.tech degree in computer science from ICFAI Foundation For Higher Education (ICFAI University, Hyderabad).
            I have interned with a few mid-size companies and was able to work closely with their mobile and web developers. I also have a lot of experience with online code repositories,
          and I love to contribute as much as I can.</Text>
          </MotionBox>

          <MotionBox
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
          <Text alignItems="center" justifyContent="center" mt={5} color={colorSecondary[colorMode]}>Feel free to see my <Link href="https://gitconnected.com/mithunredd/resume" isExternal color={colorSecondary[colorMode]}>
              <Button>resume</Button></Link>
            </Text>
          </MotionBox>

          <MotionBox
            style={{ scale }}
            initial="hidden"
            animate="visible"
          >
            <MotionBox
            style={{
            scaleY: scrollYProgress
            }}
            />
            <Heading letterSpacing="tight" mt={8} mb={4} size="lg" fontWeight={700} as="h2">
            Technical Skills
          </Heading>
        </MotionBox>
          

        </Flex>
      </Stack>
      
      
    </Container>
  )
}
