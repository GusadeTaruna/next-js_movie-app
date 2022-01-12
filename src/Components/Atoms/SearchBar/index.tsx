import React, { memo, useRef } from "react";
import { Form } from "react-bootstrap";

import { SearchBarProps } from "./SearchBar.interface";

export const SearchBar = memo((props: SearchBarProps) => {
  const { handleChange } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Search..."
        ref={inputRef}
        onChange={handleChange}
      />
    </Form>
  );
});
