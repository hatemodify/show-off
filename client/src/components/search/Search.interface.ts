interface Item {
	[key: string]: string;
}

export interface SearchInterface {
	display: number;
	items: Item[];
	lastBuildDate: string;
	start: number;
	total: number;
	keyword: string;
}
