import React from "react";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const CenterContent = styled.div`
  text-align: center;
`;

const PhotoCard = props => {
  return (
    <Card className="card-wrapper">
      <CardImg src={props.src} alt="daily nasa snapshot" />
      <CardBody>
        <CardTitle>
          <CenterContent>Photo Date: {props.date}</CenterContent>
        </CardTitle>
        <CardSubtitle>
          <CenterContent>Title: {props.title}</CenterContent>
        </CardSubtitle>
        <CardText>
          <CenterContent>Explanation: {props.explanation}</CenterContent>
        </CardText>
        <a href="https://www.nasa.gov/" target="_blank">
          <Button color="success">Learn More</Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default PhotoCard;
