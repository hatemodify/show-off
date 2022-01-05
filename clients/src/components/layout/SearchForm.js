import React, { Component } from 'react';
import axios from 'axios';
// import './layout.scss'
export default class SearchForm extends Component {
	state = {
		searchKeyword: '',
	};
	setSearchKeyword = (e) => {
		console.log(e.target.value);
		this.setState({
			searchKeyword: e.target.value,
		});
	};
	post = () => {
		const a = {
			keyword: '나이키',
		};
		const keyword = this.state.searchKeyword;
		console.log(keyword);
		axios.post('/item/related', a).then((res) => {
			console.log(res);
		});
	};
	render() {
		return (
			<div className="search_form">
				<input
					type="text"
					placeholder="please..."
					onChange={this.setSearchKeyword}
				/>
				<button type="button" className="btn_search" onClick={this.post}>
					search
				</button>
			</div>
		);
	}
}
