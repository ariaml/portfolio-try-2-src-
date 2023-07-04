import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoPython } from 'react-icons/bi';
import { DiJavascript } from 'react-icons/di';

function Skills() {
    return (
        <HStack spacing="12">
            <Icon as={AiFillHtml5} boxSize="50" />
            <Icon as={BiLogoCss3} boxSize="50" />
            <Icon as={DiJavascript} boxSize="50" />
            <Icon as={BiLogoPython} boxSize="50" />
        </HStack>
    )
}

export default Skills