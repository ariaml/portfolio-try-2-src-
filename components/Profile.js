import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { AiOutlineMail } from 'react-icons/ai'
import { VscOrganization } from 'react-icons/vsc'
import { GiGraduateCap, GiSportMedal} from 'react-icons/gi'


function Profile() {

    const [desktop] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction={desktop ? "column" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "150vh", lg: "150vh", xl: "150vh" }}>
            <Box alignSelf="center" px="35" py="16">
                <Flex direction={desktop ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} ml={desktop ? 4 : 0}
                        bg="gray.100" h="30vh" w="35vh" justify="flex-end" _hover={{ bg: "teal.400", "& > :last-child": { display: "block" }}}>
                        <Icon color="black" p="4" as={GiGraduateCap} w="20" h="20"/>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">Education</Text>
                        <Text display="none" color="black" p="4" fontSize="xl" fontWeight="semibold">BS Computer Engineering <br/> <Text fontSize="sm">FEU Institute of Technology</Text> </Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={desktop ? 4 : 0}
                        bg="gray.100" h="30vh" w="35vh" justify="flex-end" _hover={{ bg: "teal.400", "& > :last-child": { display: "block" }}}>
                        <Icon color="black" p="4" as={GiSportMedal} w="20" h="20" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">Accomplishments</Text>
                        <Text display="none" color="black" p="4" fontSize="xl" fontWeight="semibold">Logic Breadboarding Champion <br/> <Text fontSize="sm">Regional and National ICpEP CpE Challenge 2022-2023</Text> </Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={desktop ? 4 : 0}
                        bg="gray.100" h="30vh" w="35vh" justify="flex-end" _hover={{ bg: "teal.400", "& > :last-child": { display: "block" }}}>
                        <Icon color="black" p="4" as={VscOrganization} w="20" h="20" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">Organizations</Text>
                        <Text display="none" color="black" p="4" fontSize="l" fontWeight="semibold">Computer Engineering Organization <br/> <Text fontSize="sm">President AY 2223</Text> </Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="35vh" justify="flex-end">
                        <Icon color="white" p="4" as={AiOutlineMail} w="20" h="20" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">Contact me</Text>
                    </Flex>

                </Flex>

            </Box>

        </Flex>
    )
}

export default Profile