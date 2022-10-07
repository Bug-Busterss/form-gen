import type { NextPage } from "next";
import Eligibility from "../components/Eligibility";
import Requiremnts from "../components/requrements";
import MyButton from "../components/button";

const Home: NextPage = () => {
  return (
    <div>
      <Eligibility />
      <Requiremnts />
      <MyButton name="Apply Online" />
    </div>
  );
};

export default Home;
