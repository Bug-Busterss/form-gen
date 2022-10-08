import { Group, MantineProvider } from "@mantine/core";
import React from "react";
import DataMainCard from "../components/Datacard";

export default function Dashboard() {
  return (
    <div>
      <Group ml='2rem' mr='2rem' grow>
        <DataMainCard
          passportphoto={
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          }
          Name={"Test 1"}
          Status={"Pending"}
        />
        <DataMainCard
          passportphoto={
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          }
          Name={""}
          Status={""}
        />
        <DataMainCard
          passportphoto={
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          }
          Name={""}
          Status={""}
        />
      </Group>
      <Group ml='2rem' mr='2rem' mt='xl' grow>
        <DataMainCard
          passportphoto={
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          }
          Name={""}
          Status={""}
        />
        <DataMainCard
          passportphoto={
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          }
          Name={""}
          Status={""}
        />
        <DataMainCard
          passportphoto={
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          }
          Name={""}
          Status={""}
        />
      </Group>
    </div>
  );
}
