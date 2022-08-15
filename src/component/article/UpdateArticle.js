import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import articleReducer, {articleUpdate} from "../../module/articleReducer";
import {useDispatch, useSelector} from "react-redux";

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


export default function UpdateArtcle(match) {
  const article = match.location.state.article;
  const [inputData, setInputData] = useState({
    title : "",
    content : "",
    id : "",
  });
  useEffect(()=>{
    setInputData({
      title : article.title,
      content : article.content,
      id : article.id,
    }
    );
  },[]);
  
  const dispatch = useDispatch();
  const history = useHistory();

  const updateArticle = (e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const id = e.target.id.value;
    const saveData = {
      title : title,
      content : content,
      id : id
    }
    dispatch(articleUpdate(saveData));
    history.push("/");
  };

  const changeItem = (e)=>{
    setInputData(
      {
        ...inputData,
        [e.target.name] : e.target.value
      }
    );
  }
  return (
    <form onSubmit={updateArticle}>
      <div style={layout}>
        <div style={crudCss}>C R U D VIEW</div>
        <div style={articleCss}>
          <div style={th}>제목 : </div>
          <div><input name="title" value={inputData.title} onChange={changeItem}/></div>
        </div>
        <div style={articleCss}>
          <div style={th}>내용 : </div>
          <div><input name="content" value={inputData.content} onChange={changeItem}/></div>
        </div>
        <input type="hidden" name="id" value={inputData.id} ></input>
        <div
          style={{
            margin: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="outlined" style={{ marginRight: "5px" }} type="submit">
            confirm
          </Button>
        </div>
      </div>
    </form>
  );
}
