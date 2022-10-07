import { Container, Group } from "@mantine/core";
import React from "react";
import DropzoneButton from "./dragdrop";

export const Parttwo = () => {
  return (
    <div>
      <Container size='xl'>
        <Group mt='1rem' grow>
          <DropzoneButton label='Death Certificate' />
          <DropzoneButton label='Income  Certificate' />
        </Group>
        <Group grow>
          <DropzoneButton label='Birth Certificate' />
          <DropzoneButton label='Caste Certificate' />
        </Group>
        <Group grow>
          <DropzoneButton label='Passport Size Photo' />
          <DropzoneButton label='Ration Size Photo' />
        </Group>
      </Container>
    </div>
  );
};
