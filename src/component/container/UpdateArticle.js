import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";

let layout = {
  backgroundColor: "#fff",
  color: "rgba(0, 0, 0, 0.87)",
  borderRadius: "4px",
  boxShadow:
    "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  padding: "16px",
};

let articleCss = {
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

let crudCss = {
  textAlign: "center",
  height: "50px",
};

export default function readArticle() {
  return (
    <div style={layout}>
      <div style={crudCss}>C R U D VIEW</div>
      <div style={articleCss}>
        <div>게시글번호 : </div>
        <div></div>
      </div>
      <div style={articleCss}>
        <div>제목</div>
        <div></div>
      </div>
      <div style={articleCss}>
        <div>내용</div>
        <div></div>
      </div>
      <div style={articleCss}>
        <div>조회수</div>
        <div></div>
      </div>
      <div style={articleCss}>
        <div>조회수</div>
        <div></div>
      </div>
      <div style={articleCss}>
        <div>날짜</div>
        <div></div>
      </div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="outlined" style={{ marginRight: "5px" }}>
          <Link
            to="/write"
            size="small"
            style={{ color: "black", textDecoration: "none" }}
          >
            edit
          </Link>
        </Button>
        <Button variant="outlined">
          <Link
            to="/write"
            size="small"
            style={{ color: "black", textDecoration: "none" }}
          >
            delete
          </Link>
        </Button>
      </div>
    </div>
  );
}
