import { Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs, FaPython } from "react-icons/fa";
import { GrGatsbyjs, GrMysql, GrReactjs } from "react-icons/gr";
import { SiNextDotJs } from "react-icons/si";

const Skills = () => {
  return (
    <Stack spacing={["2", "6"]} direction="row" mt={[3]}>
      <Icon as={FaPython} w={[6, 6]} h={[6, 6]} color={"blackAlpha"} />
      <Icon as={FaHtml5} w={[6, 6]} h={[6, 6]} color={"blackAlpha"} />
      <Icon as={FaCss3} w={[6, 6]} h={[6, 6]} color={"blackAlpha"} />
      <Icon as={DiJavascript1} w={[6, 6]} h={[6, 6]} color={"blackAlpha"} />
      <Icon as={GrReactjs} w={[6, 6]} h={[6, 6]} color={"blackAlpha"} />
      <Icon as={GrGatsbyjs} w={[6, 6]} h={[6, 6]} color={"blackAlpha"} />
      <Icon as={SiNextDotJs} w={[6, 6]} h={[6, 6]} color={"blackAlpha"} />
      <Icon as={FaNodeJs} w={[6, 6]} h={[6, 6]} color={"blackAlpha"} />
      <Icon as={GrMysql} w={[6, 6]} h={[6, 6]} color={"blackAlpha"} />
      <Icon as={DiMongodb} w={[6, 6]} h={[6, 6]} color={"blackAlpha"} />
    </Stack>
  );
};

export default Skills;
