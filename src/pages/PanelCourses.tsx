import { Box, Button, ButtonGroup, 
  Center, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Icon, IconButton, Input, 
  InputElementProps, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Text,
  
  SimpleGrid, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaBook, FaPlay, FaUser } from "react-icons/fa";

import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import PanelGrid from "../components/PanelGrid";
import SidebarWithHeader from "../components/SideBar";
import CardModule from "../components/CardModule";
import { EditIcon } from "@chakra-ui/icons";
import React, { ElementRef, ReactText } from "react";
import  FocusLock from "react-focus-lock"



// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const PopoverForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)

  return (
    <>
      
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="top"
        closeOnBlur={false}
        
      >
        <PopoverTrigger  >
          <Button color="gray.900" bg="pink.200" size='sm' aria-label={""}>
            <Icon as={EditIcon} ></Icon>
            <Box display='inline-block'  mr={3}>
              Novo Curso
            </Box>
          </Button>
          
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Stack spacing={4}>
              <form style={{width:"100%"}} >
                <Text fontSize={"xl"} >Criar um novo</Text>
                <Input  ></Input>

                <ButtonGroup display='flex' justifyContent='flex-end'>
                <Button variant='outline' onClick={onClose}>
                  Cancel
                </Button>
                <Button isDisabled colorScheme='teal'>
                  Save
                </Button>
              </ButtonGroup>
              </form>


            </Stack>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default function PanelCourses() {


  return (
    <>
    <SidebarWithHeader>
      <PanelGrid/>
      <Center mt="10" textAlign={"center"} >
        <Heading mr="4" >Cursos</Heading>
        
      </Center>
      <Box p="4" ><PopoverForm   /></Box>
      <SimpleGrid
      minChildWidth={"300px"}
      spacing="10"
      mt="12"
      >
         <CardModule/>
          <CardModule/>
          <CardModule/>
          <CardModule/>
          <CardModule/>
          <CardModule/>
          <CardModule/>

          <CardModule/>
      </SimpleGrid>
    </SidebarWithHeader>
    </>
  );
}