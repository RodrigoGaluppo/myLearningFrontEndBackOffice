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

  const [accomplishedLessonsCOunt,setAccomplishedLessonsCOunt] = useState<number[]>([])

  const [accomplishedLessonsCOuntByHour,setAccomplishedLessonsCOuntByHour] = useState<number[]>([])


  const [dataEmployeeGenderCount,setDataEmployeeGenderCount] = useState<number[]>([])

  const Months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
     "October",
     "November",
     "December"
  ];

  const Hours = [
    "0","1","2","3","4","5","6","7","8","9","10","11","12",
    "13","14","15","16","17","18","19","20","21","22","23"
   ];
 

  useEffect(()=>{

    api.get("panel")
    .then((res)=>{
      setDataGenderCount(res.data?.genderPercentages?.map((f:any)=>{
        return f?.percentage
      }))

      setDataEmployeeGenderCount(res.data?.genderPercentagesEmployees?.map((f:any)=>{
        return f?.percentage
      }))

      setAccomplishedLessonsCOunt(Object.values(res.data?.accomplishedLessonsByMonth))

      setAccomplishedLessonsCOuntByHour(Object.values(res.data?.accomplishedLessonsByHour))
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

       <Flex minH="300px" maxH="400px" >
        <LineChart
          labels={Hours}
          data={accomplishedLessonsCOuntByHour}
        />
        </Flex>
        <Flex minH="300px" maxH="400px" >
        <LineChart
          labels={Months}
          data={accomplishedLessonsCOunt}
        />
        </Flex>

        <Center flexWrap={"wrap"} maxH="400px" >
          <Text mb="2" textAlign={"center"} w="100%">Customer Genders</Text>
          <PieChart
            label={["M","F","O"]}
            data={dataGenderCount}
          />
        </Center>

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