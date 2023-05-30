import { Center, Flex, Grid, GridItem, Heading, Icon, SimpleGrid, useColorModeValue,Text } from "@chakra-ui/react";
import { FaBook, FaPlay, FaUser } from "react-icons/fa";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import PanelGrid from "../components/PanelGrid";
import SidebarWithHeader from "../components/SideBar";
import { useEffect, useState } from "react";
import api from "../services/apiClient";
import { useAuth } from "../hooks/AuthContext";


export default function Panel() {
 
  const {token,user} = useAuth()
  const [isActive, setIsActive] = useState(false)

  const [dataGenderCount,setDataGenderCount] = useState<number[]>([])

  const [dataEmployeeGenderCount,setDataEmployeeGenderCount] = useState<number[]>([])


  useEffect(()=>{

    api.get("panel")
    .then((res)=>{
      setDataGenderCount(res.data?.genderPercentages?.map((f:any)=>{
        return f?.percentage
      }))

      setDataEmployeeGenderCount(res.data?.genderPercentagesEmployees?.map((f:any)=>{
        return f?.percentage
      }))
    })
    .catch(()=>{

    })

  },[])

  return (
    <>
    <SidebarWithHeader>
      <PanelGrid
      
      />
      <SimpleGrid color="white" my="10" columns={{sm:1,md:2}} spacing="6" >

        <Center flexWrap={"wrap"} maxH="400px" >
          <Text mb="2" textAlign={"center"} w="100%">Customer Genders</Text>
          <PieChart
            label={["M","F","O"]}
            data={dataGenderCount}
          />
        </Center>

        <Flex minH="300px" maxH="400px" >
        <LineChart/>
        </Flex>

        <Flex minH="300px" maxH="400px" >
        <LineChart/>
        </Flex>
       
        <Center flexWrap={"wrap"} maxH="400px" >
          <Text mb="2" textAlign={"center"} w="100%">Employee Genders</Text>
          <PieChart
            label={["M","F","O"]}
            data={dataEmployeeGenderCount}
          />
        </Center>

      </SimpleGrid>
    </SidebarWithHeader>
    </>
  );
}