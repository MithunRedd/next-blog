import { Flex, IconButton, Link, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export const Footer = () => {
  const { colorMode } = useColorMode();
  const borderIcon = {
    light: "gray.400",
    dark: "gray.500",
  };
  const footerHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };
  return (
    <Flex
      align="center"
      mb={4}
      direction="column"
      visibility={("hidden", "visible", "visible")}
      display={["none", "flex", "flex"]}
    >
      <div>
        <Link href="https://github.com/MithunRedd" title="GitHub" isExternal>
          <IconButton
            aria-label="GitHub"
            icon={<FiGithub />}
            size="lg"
            color={borderIcon[colorMode]}
            variant="ghost"
            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
          />
        </Link>

        <Link
          href="https://twitter.com/mithunreddy1357"
          title="Twitter"
          isExternal
        >
          <IconButton
            aria-label="Twitter"
            icon={<FiTwitter />}
            size="lg"
            color={borderIcon[colorMode]}
            variant="ghost"
            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/mithunreddyy"
          title="LinkedIn"
          isExternal
        >
          <IconButton
            aria-label="LinkedIn"
            icon={<FiLinkedin />}
            size="lg"
            color={borderIcon[colorMode]}
            variant="ghost"
            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
          />
        </Link>

        <Link href="mailto:mithunreddy1357@gmail.com" title="Email" isExternal>
          <IconButton
            aria-label="Email"
            icon={<FiMail />}
            size="lg"
            color={borderIcon[colorMode]}
            variant="ghost"
            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
          />
        </Link>
      </div>
      <div>
        <NextLink href="/" passHref>
          <Link fontSize="md" color="gray.500" minWidth="100px" mr={2} mb={3}>
            home
          </Link>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Link fontSize="md" color="gray.500" minWidth="100px" mr={2} mb={3}>
            blog
          </Link>
        </NextLink>
      </div>
    </Flex>
  );
};
