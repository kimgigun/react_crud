import React, { useState } from "react";
import AllArticle from "./article/AllArticle";
import ReadArticle from "./article/ReadArticle";
import WriteArticle from "./article/WriteArticle";
import UpdateArticle from "./article/UpdateArticle";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Container() {
  return (
    <BrowserRouter>
      <div style={{ width: "100%" }}>
        <Route exact path="/" component={AllArticle} />
        <Route path="/read" component={ReadArticle} />
        <Route path="/update" component={UpdateArticle} />
        <Route path="/write" component={WriteArticle} />
      </div>
    </BrowserRouter>
  );
}

function readArticle() {
  return (
    <div>
      <div>
        <div>게시글번호</div>
        <div></div>
      </div>
      <div>
        <div>제목</div>
        <div></div>
      </div>
      <div>
        <div>내용</div>
        <div></div>
      </div>
      <div>
        <div>조회수</div>
        <div></div>
      </div>
      <div>
        <div>조회수</div>
        <div></div>
      </div>
      <div>
        <div>날짜</div>
        <div></div>
      </div>
    </div>
  );
}

function writeArticle() {}
