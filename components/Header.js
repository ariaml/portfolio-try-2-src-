import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import airaimage from './aira2.png'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [desktop] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Flex direction={desktop ? "row" : "column"}
                spacing="200px" p={desktop ? "32" : "0"}
                alignItems='center' alignSelf="flex-start">
                <Box mt={desktop ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' whiteSpace="nowrap" >Aira Marie Ladera</Text>
                    <Text color={isDark ? "gray.200" : "gray.900"}>senior Computer Engineering Student at FEU Institute of Technology</Text>
                    
               
                </Box>
                <img src={airaimage} alt="Aira" />

            </Flex>
        </Stack>
    )
}

export default Header