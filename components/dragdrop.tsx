import { useRef } from "react";
import { Text, Group, Button, createStyles } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
    maxHeight: "10rem",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: 250,
    left: "calc(50% - 125px)",
    bottom: -20,
  },
}));

interface Props {
  label: string;

  required?: boolean;
}

export default function DropzoneButton({ label }: Props & any) {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        className={classes.dropzone}
        radius='md'
        accept={[MIME_TYPES.pdf]}
        maxSize={30 * 1024 ** 2}>
        <div style={{ pointerEvents: "none" }}>
          <Group position='center'>
            <Dropzone.Accept>
              <IconDownload
                size={50}
                color={theme.colors[theme.primaryColor][6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={50}
                color={
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black
                }
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text align='center' weight={700} size='lg' mt='xl'>
            <Dropzone.Accept>File Uploaded</Dropzone.Accept>
            <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>{label}</Dropzone.Idle>
          </Text>
          {/* <Text align='center' size='sm' mt='xs' color='dimmed'>
            Drag&apos;n&apos;drop {label} here to upload. File size must be
            under 30 mb.
          </Text> */}
        </div>
      </Dropzone>

      <Button
        className={classes.control}
        size='md'
        radius='xl'
        onClick={() => openRef.current?.()}>
        Select files
      </Button>
    </div>
  );
}
