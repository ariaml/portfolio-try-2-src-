import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { HStack, VStack, Box, Flex, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { MdGroups, MdOutlineMailOutline } from 'react-icons/md'
import { GiGraduateCap, GiSportMedal} from 'react-icons/gi'


function Profile() {

    const [desktop] = useMediaQuery("(min-width:600px)");

    const content = [
        {
            text: "Education",
            icon: GiGraduateCap,
            description: "BS Computer Engineering FEU Institute of Technology",
        },
        {
            text: "Accomplishments",
            icon: GiSportMedal,
            description: "Logic Breadboarding Champion Regional and National ICpEP CpE Challenge 2022-2023",
        },
        {
            text: "Organizations",
            icon: MdGroups,
            description: "Institute of Computer Engineers of the Philippines - Student Edition - NCR President SY 21-22 Computer Engineering Organization President SY 22-23"
        },
        {
            text: "Contact me",
            icon: MdOutlineMailOutline,
            description: "name@gmail.com",
        },
      ];

    return (
        <HStack padding='5' gap='16px'>
        {content.map((item, i) => (
            <Box p='40px' bgColor={i === content.length - 1 ? "teal.300" : "gray.200"}
                h='300px' w="320px" justify="flex-end"
                key={item.text}
                borderRadius='10px'
                role='group'
            >
            <VStack gap='24px' alignItems='start'>
            <Icon color="black" fontSize='40px' as={item.icon} />
            <Text color="black"> {item.text}</Text>
            <Text color="black"
              transition='all .4s'
              _groupHover={{opacity: 1, transform: "translateY(0)",}}
              opacity='0'
              transform='translateY(80px)'
            >
              {item.description}
            </Text>
            </VStack>
            </Box>
      ))}
    </HStack>
    )
}

export default Profile