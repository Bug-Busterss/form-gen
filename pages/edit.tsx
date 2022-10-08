import { Group, Stack } from "@mantine/core";
import React from "react";
import EditCard from "../components/editPanel";

const edit = () => {
  return (
    <div>
      <Stack
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          height: 300,
        })}
      >
        <EditCard text1="First Name" text2="Raju" />
        <EditCard text1="Middle Name" text2="Raju" />
        <EditCard text1="Last Name" text2="Raju" />
        <EditCard text1="Father's Name" text2="Raju" />
        <EditCard text1="Adhaar Card" text2="Raju" />
        <EditCard text1="Address" text2="Raju" />
      </Stack>
    </div>
  );
};

export default edit;
