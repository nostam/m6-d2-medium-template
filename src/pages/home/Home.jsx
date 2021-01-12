import React, { Component } from "react";
import "./styles.scss";
import { Container, Row, Col, Nav } from "react-bootstrap";

import ArticleListItem from "../../components/ArticleListItem/ArticleListItem";
import { IoBookmarksOutline } from "react-icons/io5";
import articles from "./articles.json";
import Footer from "../../components/Footer/Footer";
import TagsList from "../../components/TagsList/TagsList";
export default class Home extends Component {
  state = {
    articles: articles,
  };
  render() {
    return (
      <div>
        <Container>
          <Row
            className={"row-cols-lg-3 pb-4"}
            style={{ borderBottom: "1px solid rgba(230, 230, 230, 1)" }}
          >
            <Col>
              <ArticleListItem
                article={this.state.articles[0]}
                articleImg={"top"}
                headingFont={"large"}
                subheading
              />
            </Col>

            <Col className={"flex-column w-100"}>
              {this.state.articles.slice(1, 5).map((article) => (
                <ArticleListItem
                  articleImg={"right"}
                  headingFont={"small"}
                  article={article}
                />
              ))}
            </Col>

            <Col className={""}>{/*<TagsList />*/}</Col>
          </Row>
          <Row className={"py-4 mt-4"}>
            <Col className={"col-lg-8 pr-5 pl-2"}>
              {this.state.articles.slice(6).map((article) => (
                <ArticleListItem
                  articleImg={"right"}
                  headingFont={"large"}
                  subheading
                  article={article}
                />
              ))}
            </Col>
            <Col className={"col-lg-4 "}>
              <div
                className={"flex-column py-4 px-4 w-100"}
                style={{ backgroundColor: "rgb(250, 250, 250)" }}
              >
                <div className={"mb-4 title"}>
                  {" "}
                  <IoBookmarksOutline style={{ fontSize: 20 }} />{" "}
                  <span className={"ml-2"}>READING LIST </span>
                </div>
                {this.state.articles.slice(0, 3).map((article) => (
                  <ArticleListItem headingFont={"small"} article={article} />
                ))}
              </div>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
