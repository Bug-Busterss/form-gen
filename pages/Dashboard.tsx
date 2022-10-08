import { Group, MantineProvider } from "@mantine/core";
import React from "react";
import DataMainCard from "../components/Datacard";

export default function Dashboard() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}>
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
          {/* <DataMainCard
          passportphoto={
            "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          }
          Name={""}
          Status={""}
        /> */}
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
          {/* <DataMainCard
          passportphoto={""}
          Name={""}
          Status={""}
          description={""}
        /> */}
        </Group>
      </div>
    </MantineProvider>
  );
}
