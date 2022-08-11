import React from "react";
import { Link } from "react-router-dom";
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
  justifyContent: "front",
  height: "30px",
};

let crudCss = {
  textAlign: "center",
  height: "50px",
};

let th = {
  textAlign: "left",
  width: "200px",
};

function deleteItem() {
  alert("삭제하시겠습니까?");
}

export default function readArticle(match) {
  let article = match.location.state.article[0];
  return (
    <div style={layout}>
      <div style={crudCss}>C R U D VIEW</div>
      <div style={articleCss}>
        <div style={th}>게시글번호 : </div>
        <div>{article.id} 번</div>
      </div>
      <div style={articleCss}>
        <div style={th}>제목 : </div>
        <div>{article.title}</div>
      </div>
      <div style={articleCss}>
        <div style={th}>내용 : </div>
        <div>{article.content}</div>
      </div>
      <div style={articleCss}>
        <div style={th}>조회수 : </div>
        <div>{article.count} 회</div>
      </div>
      <div style={articleCss}>
        <div style={th}>날짜 : </div>
        <div>{article.date}</div>
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
            to="/update"
            size="small"
            style={{ color: "black", textDecoration: "none" }}
          >
            edit
          </Link>
        </Button>
        <Button
          variant="outlined"
          onClick={deleteItem}
          style={{ color: "black", textDecoration: "none" }}
        >
          delete
        </Button>
      </div>
    </div>
  );
}
