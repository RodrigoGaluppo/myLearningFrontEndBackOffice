import { Center, Flex, Grid, GridItem, Heading, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaBook, FaPlay, FaUser } from "react-icons/fa";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import PanelGrid from "../components/PanelGrid";
import SidebarWithHeader from "../components/SideBar";


export default function Panel() {
 

  return (
    <>
    <SidebarWithHeader>
      <PanelGrid/>
      <SimpleGrid my="10" columns={{sm:1,md:2}} spacing="6" >

        <Center maxH="400px" >
          <PieChart/>
        </Center>

        <Flex minH="300px" maxH="400px" >
        <LineChart/>
        </Flex>

        <Flex minH="300px" maxH="400px" >
        <LineChart/>
        </Flex>
       
        <Center maxH="400px" >
          <PieChart/>
        </Center>

      </SimpleGrid>
    </SidebarWithHeader>
    </>
  );
}