import React, { useState, useEffect, useReducer } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { saveDataList, selectAll } from "../../module/articleReducer";

let crudCss = {
  textAlign: "center",
  height: "50px",
};

let layout = {
  backgroundColor: "#fff",
  color: "rgba(0, 0, 0, 0.87)",
  borderRadius: "4px",
  boxShadow:
    "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  padding: "16px",
};

export default function AllArticle() {
  const dispatch = useDispatch();
  const { articleList } = useSelector((state) => state.articleReducer);
  useEffect(() => {
    if (articleList.length == 0) {
      axios.get("/crud/list.json").then((res) => {
        let data = dispatch(saveDataList(res.data.dataList));
      });
    }
  }, []);

  return (
    <div style={layout}>
      <div style={crudCss}> C R U D</div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>조회수</TableCell>
            <TableCell>날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articleList.length > 0 ? (
            articleList.map((row) => {
              let article = articleList.filter((item) => {
                return item.id === row.id;
              });
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <Link
                      to={{
                        pathname: `/read/${row.id}`,
                        state: { article: article },
                      }}
                      style={{ color: "black" }}
                    >
                      {row.title}
                    </Link>
                  </TableCell>
                  <TableCell>{row.count}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              );
            })
          ) : (
            <p>등록된 데이터가 없습니다.</p>
          )}
        </TableBody>
      </Table>
      <div
        style={{
          margin: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="outlined">
          <Link
            to="/write"
            size="small"
            style={{ color: "black", textDecoration: "none" }}
          >
            add
          </Link>
        </Button>
      </div>
    </div>
  );
}
