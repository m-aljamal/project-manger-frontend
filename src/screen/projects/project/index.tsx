import { useProject } from "src/utils/project";
import face from "src/face.jpg";
import { useAuth } from "src/context/auth-context";
import {
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Input,
  Paper,
  Select,
  SimpleGrid,
  Slider,
  useMantineTheme,
} from "@mantine/core";

import { Text } from "@mantine/core";
import { useState } from "react";

const IndexScreen = () => {
  const { project, status, error } = useProject();
  const { user }: any = useAuth();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <div>
      <div className="flex items-center gap-3 pt-10 pr-8">
        <div>
          <img src={face} className="rounded-full w-16" />
        </div>
        <div>
          <h2 className="font-bold text-xl text-gray-700">
            مرحبا بك, {user.name}!
          </h2>
          <p className="text-gray-600">لديك رسائل ومهام</p>
        </div>
      </div>
      <Drawer
        position="right"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
      >
        <p>fdfdfdf</p>
      </Drawer>

      <Group position="center">
        <Button variant="outline" onClick={() => setOpened(true)}>
          Open Drawer
        </Button>
      </Group>
    </div>
  );
};

export default IndexScreen;
