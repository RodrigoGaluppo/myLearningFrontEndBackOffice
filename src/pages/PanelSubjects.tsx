import { Box, Button, ButtonGroup, 
  Center, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Icon, IconButton, Input, 
  InputElementProps, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Text,
  
  SimpleGrid, Stack, useColorModeValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useToast, List, ListItem, Avatar, VStack, InputRightElement, InputRightAddon, InputGroup } from "@chakra-ui/react";
import { FaBook, FaPlay, FaUser } from "react-icons/fa";

import PanelGrid from "../components/PanelGrid";
import SidebarWithHeader from "../components/SideBar";

import Loader from '../components/Loader';
import React, { ElementRef, ReactText, useEffect, useState } from "react";
import  FocusLock from "react-focus-lock"
import { useAuth } from "../hooks/AuthContext";
import api from "../services/apiClient";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiSearch } from "react-icons/fi";

interface Subject {
  id:number;
  name:string;

}


// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const ModalCreateSubject = ({isOpen,onClose}: {isOpen:boolean, onClose:()=>void})=>{
    

  const [name,setName] = useState("")
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate()    
  const toast = useToast()
  const {token} = useAuth()

  const handleSendSubject = ()=>{
    setIsLoading(true)

    api.post("subject",{
      name
    },{ headers: {"Authorization" : `Bearer ${token}`}})
    .then(res=>{
      toast({
        title: 'Subject successfully published',
        description: "",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position:"top-left"
      })
      setIsLoading(false)

      onClose()

      navigate("/Subject/"+ res.data.id)
      
      
    }).catch(()=>{
      toast({
        title: 'Could not publish Subject',
        description: "try again later",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position:"top-left"
      })
      setIsLoading(false)
    })

  }

 

  return(
    <Modal  
      isOpen={isOpen}
      onClose={onClose}
    >
      <Loader isLoading={isLoading} />
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Subject</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
        <FormControl>
            <FormLabel>Name</FormLabel>
            <Input onChange={(e)=>{
              setName(e.target.value)
            }} placeholder='Name' />
          </FormControl>         
          
        </ModalBody>

        <ModalFooter>
          <Button onClick={()=>{handleSendSubject()}} colorScheme='pink' mr={3}>
            Send
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default function PanelSUbjects() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const  [searchParams, setSearchParams] = useSearchParams()

  const [maxPage, setMaxPage] = useState(0)

  const {token} = useAuth()

  const [subjects,setSubjects] = useState<Subject[]>()

  const [isLoading,setIsLoading] = useState(false)

  const toast = useToast()

  useEffect(()=>{
       
    setIsLoading(true) 
    
    let search:string = `subject/list?page=${searchParams.get("page") || 1}&search=${ searchParams.get("search") || "" }`
 
  
    api.get(search,{ headers: {"Authorization" : `Bearer ${token}`}}).then((res)=>{
       
        setSubjects(res?.data?.subjects)
        setMaxPage(res?.data?.count)
        setIsLoading(false)
    }).catch(err=>{
        console.log(err);
        setIsLoading(false)
    })
},[searchParams])
  
  const handleClickNext = ()=>{

    let page = Number(searchParams.get("page"))
    let search = String(searchParams.get("search"))
    
   

    if(page  == maxPage)
      {
        toast({
          title: 'Can not go to next page',
          description: "it is the last page",
          status: 'error',
          duration: 9000,
          isClosable: true,
          position:"top-left"
        })

        return
      }

    if(typeof(search) == typeof("")){
        setSearchParams({
            page: (page + 1 ).toString(),
            
            search
         })
    }
    else{
        
         setSearchParams({
            page: (page + 1 ).toString()
         })
    }
}

const handleClickPrevious = ()=>{

    let page = Number(searchParams.get("page"))
    let search = String(searchParams.get("search"))

    if(page - 1 <= 0){
      toast({
        title: 'Can not go to previous page',
        description: "it is the first page",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position:"top-left"
      })

      return
    }

    if(typeof(search) == typeof("")){
        setSearchParams({
            page: (page - 1 > 1 ? page - 1 : 1 ).toString(),
           search
         })
    }
    else{
        
         setSearchParams({
            page: (page - 1 > 1 ? page - 1 : 1 ).toString(),
          
         })
    }

  }

  return (
    <>
    <SidebarWithHeader>
      <PanelGrid/>
      <Loader isLoading={isLoading}/>
      <ModalCreateSubject isOpen={isOpen} onClose={onClose} />
      <Center mt="10" textAlign={"center"} >
        <Heading mr="4" >Subjects</Heading>
        
      </Center>

      <VStack maxW="3xl" margin={"0 auto"}>
      <Flex w="100%" justifyContent={"space-between"} p="4" >
        <Button onClick={onOpen} colorScheme="pink" >Create a Subject</Button>
        
        <Box>
        <InputGroup w="100%">
        <Input onChangeCapture={(e)=>{

        let page = Number(searchParams.get("page"))
        setSearchParams({page: (page - 1 >= 1 ? page - 1 : 1).toString(),search:e.currentTarget.value })

        }} type="text"  />

          <InputRightElement width='4.5rem'>
              <InputRightAddon w="100%" h="100%"  >
                  <FiSearch/>
              </InputRightAddon>
          </InputRightElement>

        </InputGroup>
        </Box>
        
      </Flex>
      <List   w="100%" mb="4" pb="4" spacing={3} maxH="400px" overflowY={"auto"} >
                       
              {
                subjects?.map(subject=>(
                  <ListItem key={subject.id} bg={"gray.700"} display="flex" alignItems={"center"} borderRadius={"xl"}  px="4" py="6"  >
                  <Link style={{width:"100%",height:"100%"}} to={`/subject/${subject.id}}`}>          
                    <Flex>
                      <Text fontSize={"large"}>{subject.name}  </Text> 
                    </Flex>
                  </Link>          
              </ListItem>
                ))
              }
              
                   
          </List>

          <Flex w="100%" justifyContent={"space-between"}>
            <Button colorScheme="pink"  onClick={handleClickPrevious} size={"lg"}>
                    <FiArrowLeft/> Previous
                </Button>

                <Button colorScheme="pink" onClick={handleClickNext} size={"lg"}>
                    Next <FiArrowRight/>
                </Button>
            </Flex>
      </VStack>
    </SidebarWithHeader>
    </>
  );
}