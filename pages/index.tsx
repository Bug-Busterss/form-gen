import type { NextPage } from "next";
import Eligibility from "../components/Eligibility";
import Requiremnts from "../components/requrements";
import MyButton from "../components/button";
import { Text } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <div>
      <Text sx={{ fontSize: "2.3rem" }} m="md" weight={700}>
        Vidhwa Sahay Yojana
      </Text>
      <Eligibility />
      <Requiremnts />
      <MyButton name="Apply Online" />
    </div>
  );
};

export default Home;
