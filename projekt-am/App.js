import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import {
  Menu,
  HamburgerIcon,
  Pressable,
} from "native-base"
import { MaterialIcons } from '@expo/vector-icons';
import {
  Heading,
  FormControl,
  Input,
  Link,
} from "native-base"

function AppBar(){
  return (
    <>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

        <Box safeAreaTop backgroundColor="#000" />

        <HStack bg='#000' px="1" py="3" justifyContent='space-between' alignItems='center'>

          <HStack space="1" alignItems='center'>

            <Box h="80%" w="90%" alignItems="flex-start" >
              <Menu
                color="white"
                w="190"
                trigger={(triggerProps) => {
                  return (
                    <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                      <HamburgerIcon color="white"/>
                    </Pressable>
                  )
                }}
              >
                <Menu.Item>Home</Menu.Item>
                <Menu.Item>LogIn</Menu.Item>
                <Menu.Item isDisabled>ToDo list</Menu.Item>
              </Menu>
            </Box>

            <Text color="white" fontSize="20" fontWeight='bold'>ToDoApp</Text>
          </HStack>

          <HStack space="2">
            <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
          </HStack>

        </HStack>

    </>
  )
}

export const Example = () => {
  return (
    <Box safeArea p="2" py="120" w="90%" maxW="290">
      <Heading
        mt="1"
        _dark={{
          color: "warmGray.200",
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500",
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" backgroundColor="#000">
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            I'm a new user.{" "}
          </Text>
          <Link
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            href="#"
          >
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  )
}

export default function () {
  return (
    <NativeBaseProvider>
      <AppBar/>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
}