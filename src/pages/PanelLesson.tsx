import { Center, Flex, Grid, GridItem,Textarea,Text, Heading, Icon,Image, SimpleGrid, useColorModeValue, Stack, Input, ButtonGroup, Button, IconButton, Box, useBreakpointValue, List, ListIcon, ListItem, HStack, VStack, FormLabel, InputLeftAddon } from "@chakra-ui/react";
import { FaBook, FaImage, FaPlay, FaUser } from "react-icons/fa";

import SidebarWithHeader from "../components/SideBar";
import CardModule from "../components/CardModule";
import { FiCheckCircle, FiLoader } from "react-icons/fi";


export default function PanelLesson() {

  return (
    <>
    <SidebarWithHeader>
 
   
        <VStack justifyContent={"left"} spacing={4}>
           
            <Input  p="4" py="8" bg={useColorModeValue("gray.200","gray.900")} fontSize={"3xl"} defaultValue="Modulo 1" lineHeight={"2"} ></Input>
            <Textarea p="4" bg={useColorModeValue("gray.200","gray.900")} defaultValue={"Modulo que voce precisa no momento que precisa"} color={'gray.500'} fontSize={'lg'}>
            
            </Textarea>

            <Input  p="4" py="4" type="email" bg={useColorModeValue("gray.200","gray.900")} fontSize={"3xl"}  ></Input>
          

            <ButtonGroup display='flex' justifyContent='flex-end'>
            <Button variant='outline' >
                Cancel
            </Button>
            <Button  colorScheme='pink'>
                Save
            </Button>
            </ButtonGroup>
        </VStack>
 
    </SidebarWithHeader>
    </>
  );
}