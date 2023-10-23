"use client";
import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Box,
  Skeleton,
  Heading,
  Tag,
  Badge,
  Link,
  Image,
  Button,
  Table,
  Thead,
  Tbody,
  ButtonGroup,
  Stack,
  Divider,
  Tfoot,
  Tr,
  Th,
  Td,
  Collapse,
  TableContainer,
  IconButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Tooltip,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

//stores
import authStore from "@/store/Auth";
import repoStore from "@/store/Repos";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/router";

//utils
import calculateTotalCost from "@/utils/calculateTotalCost";
import getModels from "@/utils/getModels";

//components
import Template from "@/components/Template";

//icons
import { ArrowBackIcon } from "@chakra-ui/icons";
import { RiInformationFill } from "react-icons/ri";
import getCustomerSpendThisMonth from "@/utils/stripe/getCustomerSpendThisMonth";
import ConfirmationModal from "../models/ConfirmationModal";
import { BsFillPersonFill } from "react-icons/bs";
import PlanCard from "./PlanCard";
import { PiStarBold, PiShootingStarBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { PiShootingStarFill } from "react-icons/pi";

const Plans = () => {
  const { user, isPro }: any = authStore();

  return (
    <Flex flexDirection="row" gap={4} width="100%">
      <PlanCard
        Icon={<FaStar />}
        title="Individual"
        price="$49"
        description="The individual plan allows you to train and maintain 1 model and use of DevGPT prompting."
        detail="Includes a 7-day free plan"
        link={`https://buy.stripe.com/bIY3clg7i5D10ko5lx?client_reference_id=${user?.id}`}
        image="https://assets-global.website-files.com/64b68d0793d2d75fa6defaa5/64b68d0793d2d75fa6defbc5_DALL%25C2%25B7E%25202023-07-04%252010.57.46%2520-%2520a%2520renaissance%2520painting%2520of%2520a%2520robot%2520being%2520born%2520in%2520medieval%2520times-p-500.png"
        popular={false}
        purchased={isPro ? true : false}
      />
      <PlanCard
        Icon={<BsStars />}
        title="Business"
        price="$499"
        description="The business plan allows you to train up to 3 models and increased use of DevGPT prompting."
        detail="Allows for up to 12 team members"
        link={`https://buy.stripe.com/7sIfZ7dZa1mLffi29m?client_reference_id=${user?.id}`}
        image="https://assets-global.website-files.com/64b68d0793d2d75fa6defaa5/64b68d0793d2d75fa6defbb3_DALLE%20(1).png"
        popular={true}
        purchased={false}
      />
      <PlanCard
        Icon={<PiShootingStarFill />}
        title="Enterprise"
        price="Contact"
        description="Enterprise allows you to take control. Train more models and run more prompts."
        detail="Allows for more than 12 team members"
        link={`https://www.devgpt.com/arrange-demo`}
        image="https://cdn.openai.com/labs/images/Two%20futuristic%20towers%20with%20a%20skybridge%20covered%20in%20lush%20foliage,%20digital%20art.webp?v=1"
        popular={false}
        purchased={false}
      />
    </Flex>
  );
};

export default Plans;
