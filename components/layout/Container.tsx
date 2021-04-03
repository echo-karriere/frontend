import { Flex, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps): JSX.Element => {
  return <Flex dir="column" alignItems="center" justifyContent="flex-start" {...props} />;
};
