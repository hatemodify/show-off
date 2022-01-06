export interface Item {
	[key: string]: string;
}
export interface SearchItems {
	display: number;
	items: any;
	lastBuildDate: string;
	start: number;
	total: number;
}
export type Keyword = string | number;
export type PageNo = number;

export interface SearchInterface {
	searchItems: Item[];
	keyword: Keyword;
	pageNo: PageNo;
}
