import type { NextPage } from "next";
import Eligibility from "../components/Eligibility";
import Requiremnts from "../components/requrements";
import MyButton from "../components/button";
import { Anchor, Text } from "@mantine/core";
import Carasoul from "../components/carosoul";

const Home: NextPage = () => {
  return (
    <div>
      <Text sx={{ fontSize: "2.3rem" }} m='md' weight={700}>
        Vidhwa Sahay Yojana
      </Text>
      <Carasoul />
      <Eligibility />
      <Requiremnts />
      <Anchor href='/formfill'>
        <MyButton name='Apply Online' />
      </Anchor>
    </div>
  );
};

export default Home;
