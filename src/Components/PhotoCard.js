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
  font-family: "Raleway", sans-serif;
  line-height: 1.5;
`;

const ButtonCenter = styled.a`
  margin-left: 20rem;
`;

const PhotoCard = props => {
  return (
    <Card className="card-wrapper">
      <CardImg
        className="image-size"
        src={props.src}
        alt="daily nasa snapshot"
      />
      <CardBody>
        <CardTitle>
          <CenterContent>Photo Date: {props.date}</CenterContent>
        </CardTitle>
        <CardSubtitle>
          <CenterContent>Title: {props.title}</CenterContent>
        </CardSubtitle>
        <CardText>
          <CenterContent>{props.explanation}</CenterContent>
        </CardText>
        <ButtonCenter>
          <a href="https://www.nasa.gov/" target="_blank">
            <Button color="dark">Learn More</Button>
          </a>
        </ButtonCenter>
      </CardBody>
    </Card>
  );
};

export default PhotoCard;
