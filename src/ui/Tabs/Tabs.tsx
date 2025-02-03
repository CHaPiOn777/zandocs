"use client";
import { List, ListItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "@emotion/styled";
import { GlobalMedia } from "@/styles/globalStyles";

export const ListST = styled(List)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #0088ff1a;
  padding: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid #0088ff1a;
  overflow: hidden;
  @media ${GlobalMedia.mobile} {
    flex-direction: column;
  }
`;

export const ListItemST = styled(ListItem)`
  justify-content: center;
  margin: auto;
  transition: all.2s ease-in-out;
  border-right: 1px solid #8dbaff80;
  cursor: pointer;
  display: flex;
  border-bottom: 1px solid transparent;
  &:last-child {
    border-right: 1px solid transparent;
  }
  &:hover {
    border-bottom: 1px solid #0486ff;
    & > p {
      transition: all.2s ease-in-out;
      color: #0486ff;
    }
  }

  /* border-bottom: 1px solid transparent; */
  padding: 16px auto;
  @media ${GlobalMedia.mobile} {
    padding: 16px;
    border: 1px solid #0088ff1a;
  }
`;
export type TPropsTabs = { title: string; link: string };
const Tabs = ({ data }: { data: TPropsTabs[] }) => {
  const router = useRouter();
  return (
    <ListST>
      {data.map(({ title, link }, index) => (
        <ListItemST key={index} onClick={() => router.push(link)}>
          <Typography
            sx={{ color: "#2640E3", transition: "all.2s ease-in-out" }}
            variant="body2"
          >
            {title}
          </Typography>
        </ListItemST>
      ))}
    </ListST>
  );
};

export default Tabs;
