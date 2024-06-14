import { Container, Text, VStack, Image } from "@chakra-ui/react";
import stripeLogo from "../assets/stripe-logo.png";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} textAlign="center">
        <Image src={stripeLogo} alt="Stripe Logo" boxSize="50px" />
        <Text fontSize="2xl" fontWeight="bold">Congratulations Lovable Labs Incorporated!</Text>
        <Text>You've just received your first payment through Stripe.</Text>
        <Text>Your first payout for this payment of <strong>$10.00</strong> (minus any fees) should land in your bank account on <strong>12/28/23</strong>.</Text>
      </VStack>
    </Container>
  );
};

export default Index;