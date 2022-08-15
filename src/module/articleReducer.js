
import react, {useEffect} from 'react';
import axios from "axios";

const MODE_SAVE = 'SAVE';
const MODE_DEL = 'DELETE';
const MODE_UPDATE = 'UPDATE';
const MODE_SELECT = 'SELECT';
const MODE_SELECT_ALL = 'SELECT_ALL';

export const articleSave = (saveData) => (
	{
		type : MODE_SAVE,
		saveData : {
			"id": saveData.id,
			"count": saveData.count,
			"title": saveData.title,
			"content": saveData.content,
			"date": saveData.date
		}
	}
);

export const articleRemove = (id) => (
	{
		type : MODE_DEL,
	    "id": id,
	}
);

export const articleUpdate = (saveData) => (
	{
		type : MODE_UPDATE,
		saveData : {
			"id": saveData.id,
			"title": saveData.title,
			"content": saveData.content,
		}
	}
);

export const selectRow = (id) => (
	{
		type : MODE_SELECT,
	    "id": id,
	}
);

export const selectAll = () => (
	{
		type : MODE_SELECT_ALL
	}
);

let initialState = {
	// let initData = {};
	// useEffect(() => {
	// 	axios.get("/crud/list.json").then((res) => {
	// 		initData.article = res.data.dataList;
	// 	});
	//   }, []);
	//   return initData;
	  articleList : [
		{
			id: "1",
			count : "0",
			title : "안녕하세요",
			content : "안녕 내용",
			"date" : "2022.02.01"
		}

	]
}

export default function articleReducer(state = initialState, action) {
	switch (action.type) {
		case MODE_SAVE: 
		let addItem = {
			"id": action.saveData.id,
			"count": 0,
			"title": action.saveData.title,
			"content": action.saveData.content,
			"date": action.saveData.date
		};
			return {
				...state,
				...state.articleList.push(addItem)
			}
		
		case MODE_UPDATE: 
			return {
				...state,
			    articleList : state.articleList.map((item) => item.id == action.saveData.id ? {...item, ...action.saveData } : item)
			}
		
		case MODE_DEL: 
			return {
				...state,
			    articleList : state.articleList.filter((item) => {return item.id !== action.id})
			}
		
		case MODE_SELECT : 
			return {
			    ...state,
				articleList : state.articleList.filter((item) => {return item.id === action.id})
			}
		case MODE_SELECT_ALL : 
			return {
				state
			}	
		default:
			return state
	}
}