import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const ListItem = (props) => {
  return <ul>{props.data}</ul>;
};

export default ListItem;
