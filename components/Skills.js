import React from 'react'
import { Flex, useColorMode, Stack, Icon } from '@chakra-ui/react'
import {  FaPython, FaHtml5, FaCss3, FaNodeJs, FaFigma } from "react-icons/fa"
import { DiJavascript1, DiMongodb  } from "react-icons/di"
import { GrMysql, GrReactjs  } from "react-icons/gr"

const Skills = () => {
    const { colorMode } = useColorMode()
    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }
    return (
        <Stack spacing={["3", "7"]} direction="row" mt={[3]}>
            <Icon as={FaPython} w={[6, 6]} h={[6, 6]} color={'blue.300'} />
            <Icon as={FaHtml5} w={[6, 6]} h={[6, 6]} color={'red.500'} />
            <Icon as={FaCss3} w={[6, 6]} h={[6, 6]} color={'blue.500'} />
            <Icon as={DiJavascript1} w={[6, 6]} h={[6, 6]} color={'yellow.400'} />
            <Icon as={GrReactjs} w={[6, 6]} h={[6, 6]} color={'blue.600'} />
            <Icon as={FaNodeJs} w={[6, 6]} h={[6, 6]} color={'green.700'} />
            <Icon as={GrMysql} w={[6, 6]} h={[6, 6]} color={'blue.400'} />
            <Icon as={DiMongodb} w={[6, 6]} h={[6, 6]} color={'green.800'} />
            <Icon as={FaFigma} w={[6, 6]} h={[6, 6]} color={'red.500'} />
        </Stack>
        
    )
}

export default Skills
