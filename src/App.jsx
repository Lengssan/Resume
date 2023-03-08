import "./App.css";
import { Text, Box, Button, Stack, Heading, Divider } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="#FFFEEC" color="dark">
      <header className="flex justify-between position:relative">
        <div>
          <Text
            bgGradient="linear(to-r, #F6D186, #FCF7BB)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            marginLeft="24"
          >
            My Profile
          </Text>
        </div>
      </header>
      <div className="flex justify-between">
        .
        <h2 className="mt-10 ml-30" as="b">
          Hi! I'm Tanapon Sotanakul.
          <br /> a Full Stack Devoloper
          <br />
          <br />
          Full Stack developer based in Techup,Thailand <br />
          I’am coding with a clean and beautiful problem solving in mind.
        </h2>
        <div>
          <Button colorScheme="yellow" pos="absolute" top={270} left={400}>
            Download Resume
          </Button>
        </div>
        <br />
        <img
          src="src\img\resume.png"
          alt="resume-pic"
          width={180}
          className="mr-10"
        />
      </div>
      <div>
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          marginLeft="400"
          bgGradient="linear(to-r, #FCCB8F,#F9989F )"
          bgClip="text"
        >
          Why Hire Me?
        </Text>
        <div className="flex justify-around justify-items-center mt-10">
          <img src="src\img\66125.png" alt="WebDesign" width={50} />
          <img src="src\img\code--v1.png" alt="Coding" width={50} />
          <img src="src\img\game.png" alt="GameDesign" width={50} />
        </div>
        <div className="flex justify-around font-bold mt-2">
          <Text>WebDesign</Text>
          <Text>Coding</Text>
          <Text>GameDesign</Text>
        </div>
        <div className="flex justify-evenly mt-1 font-extralight">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            praesentium, maiores nulla id pariatur consectetur et rem vero ipsa
            tempore excepturi at tempora omnis obcaecati eius repellendus
            temporibus aspernatur autem.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            praesentium, maiores nulla id pariatur consectetur et rem vero ipsa
            tempore excepturi at tempora omnis obcaecati eius repellendus
            temporibus aspernatur autem.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            praesentium, maiores nulla id pariatur consectetur et rem vero ipsa
            tempore excepturi at tempora omnis obcaecati eius repellendus
            temporibus aspernatur autem.
          </Text>
        </div>
      </div>
      <div>
        <Text
          bgGradient="linear(to-r, #FCCB8F,#F9989F )"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
          marginLeft="24"
        >
          My Skill
        </Text>
      </div>
      <div className="flex justify-around mt-5">
        <CircularProgress value={80} color="green.400" size={140}>
          <CircularProgressLabel>80%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={70} color="green.400" size={140}>
          <CircularProgressLabel>70%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={60} color="green.400" size={140}>
          <CircularProgressLabel>60%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={75} color="green.400" size={140}>
          <CircularProgressLabel>75%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={65} color="green.400" size={140}>
          <CircularProgressLabel>60%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={60} color="green.400" size={140}>
          <CircularProgressLabel>60%</CircularProgressLabel>
        </CircularProgress>
      </div>
      <div className="flex justify-around mt-5 ">
        <Text>HTML&CSS</Text>
        <Text>Chakra</Text>
        <Text>JavaScript</Text>
        <Text>React</Text>
        <Text>Japanese</Text>
        <Text>English</Text>
      </div>
      <div>
        <Text
          bgGradient="linear(to-r, #FCCB8F,#F9989F )"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
          marginLeft="24"
        >
          CONTACT ME
        </Text>
      </div>

      <div className="flex justify-around mt-5 ">
        <Card maxW="xs" minW="250px" bg="#FFFEEC">
          <CardBody>
            <img
              src="src\img\phone.png"
              alt="Phone"
              borderRadius="lg"
              width={20}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Phone</Heading>
              <Text>084-982-5989</Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
        <Card maxW="xs" minW="250px" bg="#FFFEEC">
          <CardBody>
            <img
              src="src\img\Email.png"
              alt="Email"
              borderRadius="lg"
              width={20}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Email</Heading>
              <Text>tanapon.sot@gmail.com</Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </div>
    </Box>
  );
}

export default App;
