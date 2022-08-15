import React, { useState } from "react";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {articleSave} from "../../module/articleReducer";
import { useHistory } from "react-router-dom";


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

export default function WriteArticle(article) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {articleList} = useSelector(state => {return state.articleReducer});

  const onSave = (saveData) => {
    dispatch(articleSave(saveData));
    history.push('/')
  };

  const SaveBtnClick = (e) =>{
    e.preventDefault();
    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let nowDate = year + '.' + month + '.' + date;
    let title = e.target.title.value;
    let content = e.target.content.value;
    article = {
      id : articleList.length+1,
      count : 0,
      title : title,
      content : content,
      date : nowDate,
    } 
    onSave(article);
  }
  return (
    <form onSubmit={SaveBtnClick}>
      <div style={layout}>
        <div style={crudCss}>C R U D write</div>
        {/* <div style={articleCss}>
          <div style={th}>게시글번호 : </div>
          <div><input name="id"/></div>
        </div> */}
        { <div style={articleCss}>
          <div style={th}>제목 : </div>
          <div><input name="title"/></div>
        </div> }
        <div style={articleCss}>
          <div style={th}>내용 : </div>
          <div><input name="content"/></div>
        </div>
        {/* <div style={articleCss}>
          <div style={th}>조회수 : </div>
          <div><input name="count" value/></div>
        </div> */}
        {/* <div style={articleCss}>
          <div style={th}>날짜 : </div>
          <div>{article.date}</div>
        </div> */}
        <div
          style={{
            margin: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="outlined" style={{ marginRight: "5px" }} type="submit" >
              confirm
          </Button>
        </div>
      </div>
    </form>
  );
}
