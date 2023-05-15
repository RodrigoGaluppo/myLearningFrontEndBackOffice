import { Center, Flex, Grid, GridItem,Textarea,Text, Heading, Icon,Image, SimpleGrid, useColorModeValue, Stack, Input, ButtonGroup, Button, IconButton, Box, useBreakpointValue } from "@chakra-ui/react";
import { FaBook, FaImage, FaPlay, FaUser } from "react-icons/fa";
import SidebarWithHeader from "../components/SideBar";
import CardModule from "../components/CardModule";


export default function PanelSubject() {
  

  return (
    <>
    <SidebarWithHeader>
 
      <SimpleGrid  columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack  spacing={4}>
                
                <Input p="4" py="8" bg={useColorModeValue("gray.50","gray.900")} fontSize={"3xl"} defaultValue="Curso 1" ></Input>
                <Textarea p="4" bg={useColorModeValue("gray.50","gray.900")} defaultValue={"um curso muito bomdedicado a atender tudo o que voce precisa no momento que precisa"} color={'gray.500'} fontSize={'lg'}>
                
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
                    'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                objectFit={'cover'}
                />
                <IconButton colorScheme={"pink"} position={"relative"} width="60px" height={"60px"} bottom="60px" icon={<FaImage />} aria-label={""} ></IconButton>
            </Box>
        </SimpleGrid>
        <Heading my="10"  >
            <Center>Modulos </Center>
            <Box pl="8" >
            <ButtonGroup>
                    <Button  colorScheme='pink' >
                        novo modulo
                    </Button>
                </ButtonGroup>
            </Box>
        </Heading>
        <SimpleGrid minChildWidth='300px' spacing={4}>
            <CardModule/>
            <CardModule/>
            <CardModule/>
            <CardModule/>
        </SimpleGrid>
        

    
    </SidebarWithHeader>
    </>
  );
}