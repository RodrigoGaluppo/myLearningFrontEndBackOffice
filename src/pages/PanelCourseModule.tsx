import { Center, Flex, Grid, GridItem,Textarea,Text, Heading, Icon,Image, SimpleGrid, useColorModeValue, Stack, Input, ButtonGroup, Button, IconButton, Box, useBreakpointValue, List, ListIcon, ListItem } from "@chakra-ui/react";
import { FaBook, FaImage, FaPlay, FaUser } from "react-icons/fa";

import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import PanelGrid from "../components/PanelGrid";
import SidebarWithHeader from "../components/SideBar";
import CardModule from "../components/CardModule";
import { FiCheckCircle, FiLoader } from "react-icons/fi";


export default function PanelourseModule() {
  

  return (
    <>
    <SidebarWithHeader>
 
      <SimpleGrid  columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack  spacing={4}>
                
                <Input p="4" py="8" bg={useColorModeValue("gray.200","gray.900")} fontSize={"3xl"} defaultValue="Modulo 1" lineHeight={"2"} ></Input>
                <Textarea p="4" bg={useColorModeValue("gray.200","gray.900")} defaultValue={"Modulo que voce precisa no momento que precisa"} color={'gray.500'} fontSize={'lg'}>
                
                </Textarea>

                <ButtonGroup display='flex' justifyContent='flex-end'>
                <Button variant='outline' >
                  Cancel
                </Button>
                <Button  colorScheme='pink'>
                  Save
                </Button>
              </ButtonGroup>
            </Stack>
            <Box>
                <Image
                rounded={'md'}
                
                alt={'feature image'}
                src={
                    '/img/formulas-white.svg'    }
                objectFit={'cover'}
                />
                <IconButton colorScheme={"pink"} position={"relative"} width="60px" height={"60px"} bottom="60px" icon={<FaImage />} aria-label={""} ></IconButton>
            </Box>
        </SimpleGrid>
        <Heading my="10"  >
            <Center>Aulas </Center>
        </Heading>
        <Flex
            w="100%"
                px="2"
            m="20px auto"
        >
        <Box pr="4" >
        <ButtonGroup>
                <Button  colorScheme='pink' >
                    nova aula
                </Button>
            </ButtonGroup>
        </Box>
        </Flex>
        <Flex
                 w="100%"
                px="2"
                 m="0 auto"
                >
                    
                <List w="100%" mb="4" pb="4" spacing={3} maxH="300px" overflowY={"auto"} >
                    <ListItem px="4" py="6" bg={useColorModeValue("gray.200","gray.900")} >
                        <ListIcon as={FiCheckCircle} color='green.500' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        
                    </ListItem>
                    <ListItem px="4" py="6" bg={useColorModeValue("gray.200","gray.900")}>
                        <ListIcon as={FiCheckCircle} color='green.500' />
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem px="4" py="6" bg={useColorModeValue("gray.200","gray.900")}>
                        <ListIcon as={FiCheckCircle} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                   
                    <ListItem px="4" py="6" bg={useColorModeValue("gray.200","gray.900")}>
                        <ListIcon as={FiLoader} color='pink.400' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem px="4" py="6" bg={useColorModeValue("gray.200","gray.900")}>
                        <ListIcon as={FiLoader} color='pink.400' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem px="4" py="6" bg={useColorModeValue("gray.200","gray.900")}>
                        <ListIcon as={FiLoader} color='pink.400' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem px="4" py="6" bg={useColorModeValue("gray.200","gray.900")}>
                        <ListIcon as={FiLoader} color='pink.400' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    
                    <ListItem px="4" py="6" bg={useColorModeValue("gray.200","gray.900")}>
                        <ListIcon as={FiLoader} color='pink.400' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem px="4" py="6" bg={useColorModeValue("gray.200","gray.900")}>
                        <ListIcon as={FiLoader} color='pink.400' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem px="4" py="6" bg={useColorModeValue("gray.200","gray.900")}>
                        <ListIcon as={FiLoader} color='pink.400' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>

                    </List>
                </Flex>

        

    
    </SidebarWithHeader>
    </>
  );
}