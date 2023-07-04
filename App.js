import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const LinkClick = (url) => {window.open(url, '_blank')};

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">ariaml</Heading>

        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={() => LinkClick('https://www.linkedin.com/in/airaladera/')}></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={() => LinkClick('https://www.instagram.com/a012a.ml/')}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={() => LinkClick('https://github.com/ariaml')}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
      
    </VStack>
  );
}

export default App;