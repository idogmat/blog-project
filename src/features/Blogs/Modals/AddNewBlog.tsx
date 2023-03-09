import React, { ChangeEvent, useRef, useState } from "react";
import { ModalBase } from "../../../ui/Modal/ModalBase";
import { Flex } from "../../../ui/Flex";
import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import { useAppDispatch } from "../../../utils/hooks";
import { blogsAPI } from "../api";

interface IModal {
  handleClose: () => void;
  isOpen: boolean;
}
export interface INewBlog {
  name: string;
  description: string;
  websiteUrl: string;
}
export const AddNewBlog: React.FC<IModal> = ({ isOpen, handleClose }) => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [newBlogData, setNewBlog] = useState<INewBlog>({
    name: "",
    description: "",
    websiteUrl: "",
  });
  const changeField = (
    type: keyof INewBlog,
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setNewBlog((state) => ({ ...state, [type]: e.target.value }));
  };
  const addBlog = (): void => {
    blogsAPI.addBlog(newBlogData);
  };
  return (
    <ModalBase handleClose={handleClose} modalTitle="Add pack" open={isOpen}>
      <Flex sx={{ padding: "0.6rem", minWidth: "22.5rem" }}>
        <Flex fDirection="column" sx={{ gap: "0.6rem", flex: "1 1 auto" }}>
          {/*<img*/}
          {/*  src={newBlogData.deckCover}*/}
          {/*  style={{*/}
          {/*    width: "100%",*/}
          {/*    height: "9.375rem",*/}
          {/*    objectFit: "cover",*/}
          {/*  }}*/}
          {/*  alt="deckCover"*/}
          {/*/>*/}

          {/*<FileLoader link={ref} onFileLoaded={handleChangeCover} />*/}
          <Input
            type={"text"}
            error={false}
            placeholder="Name"
            value={newBlogData.name}
            onChange={(e) => changeField("name", e)}
          />
          <Input
            type={"text"}
            error={false}
            placeholder="Website"
            value={newBlogData.websiteUrl}
            onChange={(e) => changeField("websiteUrl", e)}
          />
          <Input
            type={"text"}
            error={false}
            placeholder="Description"
            value={newBlogData.description}
            onChange={(e) => changeField("description", e)}
          />

          {/*<Button onClick={handleCoverLoad} sx={{ marginBottom: "0.6rem" }}>*/}
          {/*  Change cover*/}
          {/*</Button>*/}
          <Flex justify={"space-between"} sx={{ gap: "5px" }}>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={addBlog}>Add Pack</Button>
          </Flex>
        </Flex>
      </Flex>
    </ModalBase>
  );
};
